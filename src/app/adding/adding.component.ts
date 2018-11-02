import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data-service/data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Movie } from '../model';
import { SnackService } from '../services/sneck-service/snack.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-adding',
  templateUrl: './adding.component.html',
  styleUrls: ['./adding.component.scss']
})
export class AddingComponent implements OnInit {

  form = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      this.whitespacesValidator,
    ]),
    director: new FormControl('', [
      Validators.required,
      this.whitespacesValidator,
    ]),
    description: new FormControl('', [
      Validators.required,
      this.whitespacesValidator,
    ]),
    preview: new FormControl('', [
      Validators.required,
      this.whitespacesValidator,
    ]),
    video: new FormControl('', [
      Validators.required,
      this.whitespacesValidator,
    ])
  });

  movies: Movie[];

  constructor(private data: DataService, public snackServ: SnackService) { }

  whitespacesValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }

  ngOnInit() {
    if (!this.movies) {
      this.movies = [];
    }
    const arr = this.data.getMovies();
    this.movies = this.movies.concat(arr);
  }

  addMovie() {
    this.movies.push(this.form.value);
    this.form.reset();
    this.form.clearValidators();
    this.data.setMovies(this.movies);
    this.snackServ.showSnackBar();
  }

  postVideo() {
    this.form.get('video').markAsUntouched();
    let videoData: any = document.querySelector('#videoFile');
    videoData = _.first(videoData.files);
    this.data.setData().subscribe(() => {
      this.form.get('video').markAsTouched();
      this.form.get('video').setValue(`assets/video/${videoData.name}`);
    });
  }

  postImage() {
    this.form.get('preview').markAsUntouched();
    let imageData: any = document.querySelector('#imageFile');
    imageData = _.first(imageData.files);
    this.data.setData().subscribe(() => {
      this.form.get('preview').markAsTouched();
      this.form.get('preview').setValue(`assets/image/${imageData.name}`);
    });
  }
}
