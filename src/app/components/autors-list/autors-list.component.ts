import { Component, OnInit } from '@angular/core';
import { Autor } from 'src/app/models/autor.model';
import { AutorService } from 'src/app/services/autor.service';

@Component({
  selector: 'app-autors-list',
  templateUrl:'./autors-list.component.html',
  styleUrls: ['./autors-list.component.css']
})
export class AutorsListComponent implements OnInit {

  autors?: Autor[];
  currentAutor: Autor = {};
  currentIndex = -1;
  autorName = '';
  constructor(private autorService:AutorService) { }

  ngOnInit(): void {
  }

  getAutors(): void {
    this.autorService.getAll()
      .subscribe({
        next: (data) => {
          this.autors = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.getAutors();
    this.currentAutor = {};
    this.currentIndex = -1;
  }

  setActiveAutor(autor: Autor, index: number): void {
    this.currentAutor = autor;
    this.currentIndex = index;
  }

  removeAllAutors(): void {
    this.autorService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchName(): void {
    this.currentAutor = {};
    this.currentIndex = -1;

    this.autorService.findByAutor(this.autorName)
      .subscribe({
        next: (data) => {
          this.autors = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
