import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieInterface } from './movie-interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  movies: MovieInterface;

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
    const movies = newMovies;
    this.movies = movies;
    return (() => movies)();
  }

  getMovies() {
    return (() => this.movies)();
  }
}
