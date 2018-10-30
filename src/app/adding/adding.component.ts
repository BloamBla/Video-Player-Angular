import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MovieInterface } from '../movie-interface';

@Component({
  selector: 'app-adding',
  templateUrl: './adding.component.html',
  styleUrls: ['./adding.component.scss']
})
export class AddingComponent implements OnInit {

  form = new FormGroup({
    title: new FormControl('', Validators.required),
    director: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    preview: new FormControl('', Validators.required),
    video: new FormControl('', Validators.required)
  });

  movies: MovieInterface[];
  isSubmitted: Boolean = false;

  constructor(private data: DataService) { }

  ngOnInit() {
    if (!this.movies) {
      this.movies = [];
    }
    const arr = this.data.getMovies();
    this.movies = this.movies.concat(arr);
  }

  addMovie() {
    this.isSubmitted = true;
    this.movies.push(this.form.value);
    this.form.reset();
    this.form.clearValidators();
    this.data.setMovies(this.movies);
    setTimeout(() => this.isSubmitted = false, 3000);
  }
}
