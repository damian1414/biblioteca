import { Component, OnInit } from '@angular/core';
import { Autor } from 'src/app/models/autor.model';
import { AutorService } from 'src/app/services/autor.service';


@Component({
  selector: 'app-add-autor',
  templateUrl: './add-autor.component.html',
  styleUrls: ['./add-autor.component.css']
})
export class AddAutorComponent implements OnInit {

  autor : Autor ={
    id:0,
    name: '',
    document: 0
  };
  submitted = false;

  constructor(private autorService:AutorService) { }

  ngOnInit(): void {
  }
  saveAutor():void{
    const data = {
      name:this.autor.name,
      document:this.autor.document
    };

    this.autorService.create(data).subscribe({
      next:(res) => {
        console.log(res);
        this.submitted = true;
      },
      error:(e) => console.error(e)
    })
  }

  newAutor():void {
    this.submitted = false;
    this.autor = {
      id:0,
      name:'',
      document:0
    };
  }
}
