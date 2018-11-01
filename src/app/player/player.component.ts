import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';
import { Movie } from '../model';
import * as _ from 'lodash';
import {MatDialog} from '@angular/material';
import {ConfirmDialogComponent} from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  movies: Movie[];
  currentMovie: Movie;
  autoPlay: Boolean = false;
  getBG;

  constructor(public dialog: MatDialog, private data: DataService) { }

  ngOnInit() {
    this.data.getData().subscribe(
      data => {
        this.movies = data;
        this.currentMovie = _.first(data);
      });
    this.getBG = (link: string) => {
      return `{background-image: url(assets/${link})}`;
    };
  }

  changeMovie(movie: Movie) {
    if (this.autoPlay === false) {
      this.autoPlay = true;
    }
    this.currentMovie = movie;
  }

  getAutoPlay() {
    if (this.autoPlay === true) {
      return 'autoplay';
    }
  }

  addNewMovie() {
    this.data.setMovies(this.movies);
  }

  removeMovie(movie: Movie, $event) {
    $event.stopPropagation();
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: {movie}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        for (const elem of this.movies) {
          if (elem === movie) {
            if (this.currentMovie === movie) {
              this.currentMovie = _.first(this.movies);
            }
            this.movies.splice(this.movies.indexOf(movie), 1);
            break;
          }
        }
      }
    });
  }

  transferDataSuccess($event: any) {
    if (this.autoPlay === false) {
      this.autoPlay = true;
    }
    this.currentMovie = $event.dragData;
  }
}
