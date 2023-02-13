import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/book.model';
import { Autor } from 'src/app/models/autor.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AutorService } from 'src/app/services/autor.service';

@Component({
  selector:'app-book-details',
  templateUrl:'./book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent  {



  autors?: Autor[];
  autorSelec?:Autor;
  autorEnv?:Autor;
  selectedObject? : Autor;
  @Input() viewMode = false;

  @Input() idAutor :Autor ={
    id: 0,
    name: '',
    document:0
  }

  @Input() currentBook: Book = {
    id: 0,
    title: '',
    idAutor: this.idAutor
  };

  @ViewChild('teams') teams!: ElementRef;
  constructor(private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router,
    private autorService:AutorService,
  ) { }

  message = '';

  idAut: any = '';
	changed(event:any) {
    this.idAut = event.target.value;
    this.getAutor(this.idAut);
	}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getBook(this.route.snapshot.params["id"]);
      this.getAutors();
    }
  }

  getBook(id: number): void {
    this.bookService.get(id)
      .subscribe({
        next: (data) => {
          this.currentBook = data;
          this.autorSelec = this.currentBook.idAutor;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }


  updateBook(): void {
    this.message = '';
    this.currentBook.idAutor = this.autorEnv;
    console.log("OBJETCT"+ this.autorEnv);
    this.bookService.update(this.currentBook.id, this.currentBook)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'Book actualizado correctamente';
        },
        error: (e) => console.error(e)
      });
  }

  deleteBook(): void {
    this.bookService.delete(this.currentBook.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/books']);
        },
        error: (e) => console.error(e)
      })
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

  getAutor(id: number): void {
    this.autorService.get(id)
      .subscribe({
        next: (data) => {
          this.autorEnv = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
}
