import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8020/api/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getAll():Observable<Book[]>{
    return this.http.get<Book[]>(baseUrl);;
  }

  get(id: any): Observable<Book> {
    return this.http.get<Book>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/createBook`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
