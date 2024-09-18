import { Component, Input } from '@angular/core';
import { FilmCardComponent } from '../film-card/film-card.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { Film } from '../definitions';

@Component({
  selector: 'app-films-gallery',
  standalone: true,
  imports: [FilmCardComponent, PaginationComponent],
  templateUrl: './films-gallery.component.html'
})
export class FilmsGalleryComponent {

  @Input() films: Film[] = [];
  @Input() pages: number[] = [];
}
