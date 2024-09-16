import { Component, Input } from '@angular/core';
import { FilmCardComponent } from '../film-card/film-card.component';
import { Response } from '../definitions';

@Component({
  selector: 'app-films-gallery',
  standalone: true,
  imports: [FilmCardComponent],
  templateUrl: './films-gallery.component.html'
})
export class FilmsGalleryComponent {

  @Input() filmsData?: Response;
}
