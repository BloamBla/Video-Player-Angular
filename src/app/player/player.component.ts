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

  constructor(private data: DataService, public dialog: MatDialog) { }

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

  removeMovie(movie: Movie) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: {movie}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        for (let i = 0; i < this.movies.length; i++) {
          if (this.movies[i] === movie) {
            this.movies.splice(i, 1);
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
