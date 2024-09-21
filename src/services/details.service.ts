import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FilmInfo} from "definitions";
import {environment} from "environments/environment";

@Injectable({
    providedIn: 'root'
})
export class DetailsService {

    constructor(private http: HttpClient) {
    }

    getInfo(imdbID: string): Observable<FilmInfo> {
        return this.http.get<FilmInfo>('http://www.omdbapi.com', {
            responseType: "json",
            params: {
                apikey: environment.omdb_api,
                i: imdbID
            }
        });
    }
}
