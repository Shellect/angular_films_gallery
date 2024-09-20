import { Component, Input } from '@angular/core';
import { SearchService } from 'services';

@Component({
  selector: 'app-pagination',
  standalone: true,
  templateUrl: './pagination.component.html'
})
export class PaginationComponent {
  @Input pages: number[] = [];
  public currentPage: number = 1;
  constructor(private searchService: SearchService){}

  public changePage(nextPage: number) {
    this.searchService.changePage(nextPage);
  }
}
