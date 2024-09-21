import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from 'environments/environment';
import {FilmsSearchResponse} from 'definitions';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SearchService {
    private searchQuery: string = '';
    private type: string = 'movie';
    public pageNumber: number = 1;
    private filmsSubject = new BehaviorSubject<FilmsSearchResponse | null>(null);
    public filmsSubject$ = this.filmsSubject.asObservable();

    constructor(private http: HttpClient) {
    }

    getPagination(totalResults?: string): number[] {
        let total = Math.ceil(Number(totalResults) / 10);
        let pages = [];
        for (let i = 1; i <= total; i++) {
            if (i > 2 && i < this.pageNumber - 3) {
                pages.push(0);
                i = this.pageNumber - 4;
                continue;
            }
            if (i > this.pageNumber + 3 && i < total - 1) {
                pages.push(0);
                i = total - 2;
                continue;
            }
            pages.push(i);
        }
        return pages;
    }

    searchTitle(s: string | undefined, type: string | undefined): Observable<FilmsSearchResponse> {
        this.searchQuery = s || '';
        this.type = type || 'movie';
        this.pageNumber = 1;
        return this.fetchFilms();
    }

    changePage(nextPage: number): void {
        this.pageNumber = nextPage;
        this.fetchFilms().subscribe(data => this.filmsSubject.next(data));
    }

    private fetchFilms(): Observable<FilmsSearchResponse> {
        return this.http.get<FilmsSearchResponse>(
            'http://www.omdbapi.com', {
                responseType: "json",
                params: {
                    apikey: environment.omdb_api,
                    s: this.searchQuery,
                    type: this.type,
                    page: this.pageNumber
                }
            }
        );
    }
}
