import {Component, Input} from '@angular/core';
import {DetailsService} from "services";
import {FilmInfo} from "definitions";

@Component({
    selector: 'app-details-page',
    standalone: true,
    imports: [],
    templateUrl: './details-page.component.html',
    styleUrl: './details-page.component.scss'
})
export class DetailsPageComponent {
    @Input() set id(imdbID: string) {
        this.detailsService.getInfo(imdbID).subscribe(film => this.film = film);
    }

    public film!: FilmInfo;

    constructor(private detailsService: DetailsService) {
    }
}
