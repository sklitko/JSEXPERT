import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'film-search',
  templateUrl: './film-search.component.html',
  styleUrls: ['./film-search.component.css']
})
export class FilmSearchComponent implements OnInit {
 
 search: string;

 @Output()
  searchEv = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  searchFilm() {
     this.searchEv.emit(this.search);
}

}
