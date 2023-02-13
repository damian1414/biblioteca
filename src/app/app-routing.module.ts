import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutorsListComponent } from './components/autors-list/autors-list.component';
import { AutorDetailsComponent } from './components/autor-details/autor-details.component';
import { AddAutorComponent } from './components/add-autor/add-autor.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { AddBookComponent } from './components/add-book/add-book.component';

const routes: Routes = [
  { path: '', redirectTo: 'autores', pathMatch: 'full' },
  { path: 'autores', component: AutorsListComponent },
  { path: 'autores/:id', component: AutorDetailsComponent },
  { path: 'add', component: AddAutorComponent },
  { path: 'books', component: BookListComponent },
  { path: 'books/:id', component: BookDetailsComponent },
  { path: 'addbook', component: AddBookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
