import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private moviesUrl = 'http://localhost:3000/api/movies'

  constructor( private _http : HttpClient) { }

  getMovies(){
      return this._http.get<any>(this.moviesUrl)
  }

}
