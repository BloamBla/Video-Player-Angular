import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {observable, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  movies: Object;
  abserv: Object;

  constructor(private http: HttpClient) {
  }

  getData() {
    return this.abserv = Observable.create((observer: any) => {
      if (this.movies) {
        observer.next(this.movies);
      } else this.http.get('assets/data.json').subscribe(
        data => observer.next(data)
      );
    });
  }

  setMovies(newMovies) {
    let movies = newMovies;
    this.movies = movies;
    return (() => movies)();
  }

  getMovies() {
    return (() => this.movies)();
  }
}
