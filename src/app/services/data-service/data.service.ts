import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../../model';

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
        this.http.get('/api/movies').subscribe(
          data => observer.next(data)
        );
      }
    });
  }

  setMovies(newMovies) {
    this.movies = newMovies;
  }

  setData() {
    return Observable.create((observer: any) => {
      this.http.post('commands/config', '{"delay":5000}').subscribe(
        () => {
          observer.next(true);
        }
      );
    });
  }

  getMovies() {
    return this.movies;
  }
}
