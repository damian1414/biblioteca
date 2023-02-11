import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutorsListComponent } from './components/autors-list/autors-list.component';
import { AutorDetailsComponent } from './components/autor-details/autor-details.component';
import { AddAutorComponent } from './components/add-autor/add-autor.component';

const routes: Routes = [
  { path: '', redirectTo: 'autores', pathMatch: 'full' },
  { path: 'autores', component: AutorsListComponent },
  { path: 'autores/:id', component: AutorDetailsComponent },
  { path: 'add', component: AddAutorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
