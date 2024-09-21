import {Component, Input} from '@angular/core';
import {SearchService} from 'services';
import {BehaviorSubject} from "rxjs";

@Component({
    selector: 'app-pagination',
    standalone: true,
    templateUrl: './pagination.component.html'
})
export class PaginationComponent {
    @Input pages: number[] = [];

    constructor(private searchService: SearchService) {
    }

    public changePage(page: number) {
        this.searchService.changePage(page);
    }
}
