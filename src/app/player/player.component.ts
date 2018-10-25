import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DataService} from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  movies: Object;
  currentMovie: Object;
  getBG;

  constructor(private data: DataService, private sanitizer: DomSanitizer, private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    this.data.getData().subscribe(
      data => {
        this.movies = data;
        this.currentMovie = this.movies[0];
      }
    );

    this.getBG = (link) => {
      return this.sanitizer.bypassSecurityTrustStyle(`{background-image: url(assets/${link})}`);
    };
  }

  changeMovie(movie) {
    if (!document.querySelector('#video').getAttribute('autoplay')) {
      this.renderer.setAttribute(document.querySelector('#video'), 'autoplay', 'true');
      document.querySelector('#video').play();
    }
    this.currentMovie = movie;
  }
}
