import {Injectable} from '@angular/core';
import {environment} from 'environments/environment';
import {FilmsSearchResponse} from 'definitions';
import {BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchQuery: string = '';
  private type: string = 'movie';
  private pageNumber: number = 1;
  private filmsSubject = new BehaviorSubject<FilmsSearchResponse | null>(null);
  public filmsSubject$ = this.filmsSubject.asObservable();

  async searchTitle(s: string | undefined, type: string | undefined): Promise<FilmsSearchResponse> {
    this.searchQuery = s || '';
    this.type = type || 'movie';
    this.pageNumber = 1;
    return await this.fetchFilms();
  }

  async changePage(nextPage: number): Promise<void> {
    this.pageNumber = nextPage;
    this.filmsSubject.next(await this.fetchFilms());
  }

  private async fetchFilms(): Promise<FilmsSearchResponse> {
    const response = await fetch(
      'http://www.omdbapi.com/?apikey='
      + environment.omdb_api
      + '&s=' + this.searchQuery
      + '&type=' + this.type
      + '&page=' + this.pageNumber
    );
    return await response.json();
  }
}
