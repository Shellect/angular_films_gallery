import {Component, Input} from '@angular/core';
import {CardComponent, PaginationComponent} from 'components';
import {Film} from 'definitions';

@Component({
    selector: 'app-gallery',
    standalone: true,
    imports: [CardComponent, PaginationComponent],
    templateUrl: './gallery.component.html'
})
export class GalleryComponent {
    @Input() films: Film[] = [];
    @Input() pages: number[] = [];
}
