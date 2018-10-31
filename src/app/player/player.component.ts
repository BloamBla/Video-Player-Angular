import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';
import { Movie } from '../model';
import * as _ from 'lodash';

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

  constructor(private data: DataService) { }

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
}
