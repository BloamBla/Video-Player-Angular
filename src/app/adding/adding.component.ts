import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';


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

  movies;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.movies = this.data.getMovies();
  }

  addMovie() {
    this.movies = [...this.movies, this.form.value];
    console.log(this.movies);
    this.form.setValue({
      title: '',
      director: '',
      description: '',
      preview: '',
      video: ''
    });
    this.data.setMovies(this.movies);
  }
}
