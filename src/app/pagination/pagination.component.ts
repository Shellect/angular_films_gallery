import { Component, Input } from '@angular/core';
import { SearchFormService } from '../search-form/search-form.service';

@Component({
  selector: 'app-pagination',
  standalone: true,
  templateUrl: './pagination.component.html'
})
export class PaginationComponent {
  @Input pages: number[] = [];
  public currentPage: number = 1;
  constructor(private searchService: SearchFormService){}

  public changePage(nextPage: number) {
    this.searchService.changePage(nextPage);
  }
}
