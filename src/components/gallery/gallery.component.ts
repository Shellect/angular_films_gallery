import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardComponent, PaginationComponent, SearchFormComponent} from 'components';
import {Film, FilmsSearchResponse} from 'definitions';
import {SearchService} from "services";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-gallery',
    standalone: true,
    imports: [SearchFormComponent, CardComponent, PaginationComponent],
    templateUrl: './gallery.component.html'
})
export class GalleryComponent implements OnInit, OnDestroy {
    public films: Film[] = [];
    public pages: number[] = [];
    private subscription$!: Subscription;

    constructor(private searchService: SearchService) {
    }

    ngOnInit() {
        this.subscription$ = this.searchService.filmsSubject$.subscribe(
            response => this.loadFilms(response)
        )
    }

    ngOnDestroy() {
        this.subscription$.unsubscribe();
    }

    loadFilms(response: FilmsSearchResponse | null) {
        if (!response) return;
        this.films = response.Search || [];
        this.pages = this.searchService.getPagination(response.totalResults);
    }
}
