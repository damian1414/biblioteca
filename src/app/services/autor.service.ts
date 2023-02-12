import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Autor } from '../models/autor.model';

const baseUrl = 'http://localhost:8020/api/autor';
@Injectable({
  providedIn: 'root'
})

export class AutorService {


  constructor(private http: HttpClient) { }

  getAll():Observable<Autor[]>{
    return this.http.get<Autor[]>(baseUrl);;
  }

  get(id: any): Observable<Autor> {
    return this.http.get<Autor>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/createAutor`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

}
