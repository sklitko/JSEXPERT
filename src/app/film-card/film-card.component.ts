import { Component, OnInit, Input } from '@angular/core';
import {FilmService} from '../film.service'

@Component({
  selector: 'film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css']
})
export class FilmCardComponent implements OnInit {
  @Input()
  filmId: string; 
  filmItem: {} = {};
  @Input()
  view: string;

  constructor(private filmCardService: FilmService) { }

  ngOnInit() {
    if(!this.filmId) {return;}
    this.filmCardService.getFilmById(this.filmId).subscribe(data => {
      this.filmItem = data;
    })
  }
}

