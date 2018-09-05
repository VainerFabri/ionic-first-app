import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  private baseApiPath = "https://api.themoviedb.org/3";

  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }

  getLatestMovies(page = 1){
    return this.http.get(this.baseApiPath + `/movie/popular?page=${page}&api_key=a2634f9491e98e8e3e90a958cf6a5416`);
  }

  getMovieDetails(filmeId){
    return this.http.get(this.baseApiPath + `/movie/${filmeId}?api_key=a2634f9491e98e8e3e90a958cf6a5416`);
  }
}
