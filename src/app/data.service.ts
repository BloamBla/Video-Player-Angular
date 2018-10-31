import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  movies: Movie;

  constructor(private http: HttpClient) {
  }

  getData() {
    return Observable.create((observer: any) => {
      if (this.movies) {
        observer.next(this.movies);
      } else {
        this.http.get('assets/data.json').subscribe(
          data => observer.next(data)
        );
      }
    });
  }

  setMovies(newMovies) {
    this.movies = newMovies;
  }

  getMovies() {
    return this.movies;
  }
}
