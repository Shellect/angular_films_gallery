import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Response } from '../definitions';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SearchFormService {
  // Observable films sources
  private resourseSource = new Subject<Response>();

  constructor() { }

  async searchTitle(s: string, type: string): Promise<Response> {
    const response = await fetch('http://www.omdbapi.com/?apikey='
      + environment.omdb_api
      + '&s=' + s
      + '&type=' + type);
    const data = await response.json();
    this.resourseSource.next(data);
    return data;
  }
}
