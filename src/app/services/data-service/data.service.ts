import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../../model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  movies: Movie[];

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

  setNewMovie(newMovie) {
    return Observable.create((observer: any) => {
      this.http.post('/api/movies', newMovie).subscribe(
        (data: any) => {
          this.movies.push(data);
          observer.next(data);
        }
      );
    });
  }

  getMovies() {
    return this.movies;
  }
}
