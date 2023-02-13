import { Component, OnInit } from '@angular/core';
import { Autor } from 'src/app/models/autor.model';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';
import { AutorService } from 'src/app/services/autor.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  selectedObject?:Autor;
  idAutor : Autor ={
    id:0,
    name: '',
    document: 0
  };

autorEnv? : Autor[];
  book : Book ={
    id:0,
    title: '',
    idAutor: this.idAutor
  };
  submitted = false;

  constructor(private bookService:BookService, private autorService:AutorService) { }

  opcionSeleccionado: string  = '0';
  verSeleccion: string        = '';
  ngOnInit(): void {
    this.getAutors();
  }
  saveBook():void{
    const data = {
      id:0,
      title:this.book.title,
      idAutor:this.selectedObject
    };
    this.bookService.create(data).subscribe({
      next:(res) => {
        console.log(res);
        this.submitted = true;
      },
      error:(e) => console.error(e)
    })
  }
  newBook():void {
    this.submitted = false;
    this.book = {
      id:0,
      title:'',
      idAutor: this.idAutor
    };
  }
  getAutors(): void {
    this.autorService.getAll()
      .subscribe({
        next: (data) => {
          this.autorEnv = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
