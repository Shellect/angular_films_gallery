import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchFormComponent } from './search-form/search-form.component';
import { FilmsGalleryComponent } from './films-gallery/films-gallery.component';
import { Response } from './definitions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchFormComponent, FilmsGalleryComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  public filmsData?: Response;

  loadFilms(response: Response) {
    this.filmsData = response;
  }
}
