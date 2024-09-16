import { Component, Input } from '@angular/core';
import { Film } from '../definitions';

@Component({
  selector: 'app-film-card',
  standalone: true,
  imports: [],
  templateUrl: './film-card.component.html',
  styleUrl: './film-card.component.scss'
})
export class FilmCardComponent {
    @Input() film!: Film ;
}
