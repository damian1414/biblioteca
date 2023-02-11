import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAutorComponent } from './components/add-autor/add-autor.component';
import { AutorDetailsComponent } from './components/autor-details/autor-details.component';
import { AutorsListComponent } from './components/autors-list/autors-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAutorComponent,
    AutorDetailsComponent,
    AutorsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
