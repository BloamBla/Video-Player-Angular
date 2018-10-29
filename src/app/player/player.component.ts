import {Component, ElementRef, OnInit, Renderer2, Type} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DataService} from '../data.service';
import { Observable } from 'rxjs';

type Movie = Object & {
  title: String,
  description: String,
  video: String,
  director: String,
  preview: String
}

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  movies: Movie[];
  currentMovie: Movie;
  getBG;

  constructor(private data: DataService, private sanitizer: DomSanitizer, private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    this.data.getData().subscribe(
      data => {
        this.movies = data;
        this.currentMovie = data[0];
      });
    this.getBG = (link: string) => {
      return this.sanitizer.bypassSecurityTrustStyle(`{background-image: url(assets/${link})}`);
    };
  }

  changeMovie(movie: Movie) {
    if (!document.querySelector('#video').getAttribute('autoplay')) {
      this.renderer.setAttribute(document.querySelector('#video'), 'autoplay', 'true');
    }
    this.currentMovie = movie;
  }

  addNewMovie() {
    this.data.setMovies(this.movies);
  }
}
