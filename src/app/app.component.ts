import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchFormComponent, GalleryComponent } from 'components';
import { SearchService } from 'services';
import { FilmsSearchResponse, Film } from 'definitions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchFormComponent, GalleryComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  public films: Film[] = [];
  public pages: number[] = [];

  constructor(private searchService: SearchService){
    this.searchService.filmsSubject$.subscribe(
      response => this.loadFilms(response)
    )
  }

  loadFilms(response: FilmsSearchResponse | null) {
    if (!response) return;
    this.films = response.Search || [];
    let total = Math.ceil(Number(response.totalResults) / 10);
    let pages = [];
    for (let i = 1; i <= total; i++) {
      pages.push(i);
    }
    this.pages = pages;
  }
}
