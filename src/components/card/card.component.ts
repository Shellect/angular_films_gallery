import {Component, Input} from '@angular/core';
import {Film} from 'definitions';

@Component({
    selector: 'app-card',
    standalone: true,
    imports: [],
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss'
})
export class CardComponent {
    @Input() film!: Film;
}
