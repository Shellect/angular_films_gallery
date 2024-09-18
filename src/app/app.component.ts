import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchFormComponent } from './search-form/search-form.component';
import { FilmsGalleryComponent } from './films-gallery/films-gallery.component';
import { SearchFormService } from './search-form/search-form.service';
import { Response, Film } from './definitions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchFormComponent, FilmsGalleryComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  public films: Film[] = [];
  public pages: number[] = [];

  constructor(private searchService: SearchFormService){
    this.searchService.filmsSubject$.subscribe(
      response => this.loadFilms(response)
    )
  }

  loadFilms(response: Response | null) {
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
