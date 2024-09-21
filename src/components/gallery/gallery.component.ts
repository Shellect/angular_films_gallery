import {Component} from '@angular/core';
import {CardComponent, PaginationComponent, SearchFormComponent} from 'components';
import {Film, FilmsSearchResponse} from 'definitions';
import {SearchService} from "services";

@Component({
    selector: 'app-gallery',
    standalone: true,
    imports: [SearchFormComponent, CardComponent, PaginationComponent],
    templateUrl: './gallery.component.html'
})
export class GalleryComponent {
    public films: Film[] = [];
    public pages: number[] = [];

    constructor(private searchService: SearchService) {
    }

    ngOnInit() {
        this.searchService.filmsSubject$.subscribe(
            response => this.loadFilms(response)
        )
    }

    loadFilms(response: FilmsSearchResponse | null) {
        if (!response) return;
        this.films = response.Search || [];
        this.pages = this.searchService.getPagination(response.totalResults);
    }
}
