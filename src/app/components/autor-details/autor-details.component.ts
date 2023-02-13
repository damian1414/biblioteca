import { Component, Input, OnInit } from '@angular/core';
import { AutorService } from 'src/app/services/autor.service';
import { Autor } from 'src/app/models/autor.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-autor-details',
  templateUrl: './autor-details.component.html',
  styleUrls: ['./autor-details.component.css']
})
export class AutorDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentAutor: Autor = {
    id: 0,
    name: '',
    document: 0
  };

  message = '';

  constructor(private autorService: AutorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getAutor(this.route.snapshot.params["id"]);
    }
  }

  getAutor(id: number): void {
    this.autorService.get(id)
      .subscribe({
        next: (data) => {
          this.currentAutor = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updatePublished(status: boolean): void {
    const data = {
      name: this.currentAutor.name,
      document: this.currentAutor.document
    };

    this.message = '';

    this.autorService.update(this.currentAutor.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'The status was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  updateAutor(): void {
    this.message = '';

    this.autorService.update(this.currentAutor.id, this.currentAutor)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'Autor actualizado correctamente';
        },
        error: (e) => console.error(e)
      });
  }

  deleteAutor(): void {
    this.autorService.delete(this.currentAutor.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/autores']);
        },
        error: (e) => console.error(e)
      })
  }
}
