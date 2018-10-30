import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';
import { MovieInterface } from '../movie-interface';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  movies: MovieInterface[];
  currentMovie: MovieInterface;
  getBG;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getData().subscribe(
      data => {
        this.movies = data;
        this.currentMovie = data[0];
      });
    this.getBG = (link: string) => {
      return `{background-image: url(assets/${link})}`;
    };
  }

  changeMovie(movie: MovieInterface) {
    if (!document.querySelector('#video').getAttribute('autoplay')) {
      document.querySelector('#video').setAttribute('autoplay', 'true');
    }
    this.currentMovie = movie;
  }

  addNewMovie() {
    this.data.setMovies(this.movies);
  }
}
