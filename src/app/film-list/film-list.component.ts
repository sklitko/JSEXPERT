import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FilmService} from '../film.service'

@Component({
  moduleId: module.id,
  selector: 'film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {

  filmList : any[] = []
  filmName : string; 
  pageNumber: string;
  selectedView: string;
  rowHeight: string;

 

  constructor(private filmListService: FilmService) { }

  ngOnInit() {
    this.filmName = "Lord";
    this.pageNumber = "1";
    this.getFilms(this.filmName);
    this.selectedView = "grid";
    this.rowHeight = "850px";
 }

 views = [
    {value: 'grid', viewValue: 'Сетка'},
    {value: 'list', viewValue: 'Список'}
  ];

  private getFilms(filmName: string): void {
    if(filmName) {
      this.filmListService.getFilms(filmName, this.pageNumber)
        .subscribe(
          (films: any[]) => {
            if (films && films.length) {
              this.filmList = this.filmList.concat(films);
            }
          },
          (error: any) => {
            console.log(error);
          }
        );
    }
  }

  private searchFilm(film: string) {
    if (this.filmName === film) {
      this.getFilms(this.filmName);  
    } else {
      this.filmName = film;
      this.pageNumber = "1";
      this.filmList = [];
      this.getFilms(this.filmName);
    }
    
  }

  addMoreFilms(): void {
    this.pageNumber = String(parseInt(this.pageNumber) + 1);
    this.searchFilm(this.filmName);
  }

  setView() {
    this.selectedView === 'grid' ? this.rowHeight = '850px' : this.rowHeight = '400px';
  }

  
}
