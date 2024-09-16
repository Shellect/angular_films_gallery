import { Component, Output, EventEmitter } from '@angular/core';
import { SearchFormService } from './search-form.service';
import { FormsModule } from "@angular/forms";
import { Response } from '../definitions';

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [FormsModule],
  providers: [SearchFormService],
  templateUrl: './search-form.component.html'
})
export class SearchFormComponent {
  public s: string = '';
  public type: string = "movie";

  @Output() onLoadEvent = new EventEmitter<Response>();

  constructor(private searchService: SearchFormService) { }

  async action() {
    const data = await this.searchService.searchTitle(this.s, this.type);
    if (data.Response === "True") {
          this.onLoadEvent.emit(data);
    } else {
      // TODO: В случае ошибки сервера показывать сообщение пользователю
    }
  }
}
