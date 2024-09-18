import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Response } from '../definitions';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SearchFormService {
  private searchQuery: string = '';
  private type: string = 'movie';
  private pageNumber: number = 1;
  private filmsSubject = new BehaviorSubject<Response | null>(null);
  public filmsSubject$ = this.filmsSubject.asObservable();

  async searchTitle(s: string, type: string): Promise<Response> {
    this.searchQuery = s;
    this.type = type;
    this.pageNumber = 1;
    const response = await this.fetchFilms();
    // this.filmsSubject.next(response);
    return response;
  }

  async changePage(nextPage: number): Promise<void> {
    this.pageNumber = nextPage;
    this.filmsSubject.next(await this.fetchFilms());
  }

  private async fetchFilms(): Promise<Response> {
    const response = await fetch(
      'http://www.omdbapi.com/?apikey='
      + environment.omdb_api
      + '&s=' + this.searchQuery
      + '&type=' + this.type
      + '&page=' + this.pageNumber
    );
    return await response.json();
  }
}
