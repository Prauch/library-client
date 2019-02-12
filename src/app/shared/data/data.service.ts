import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<any> {
    return this.http.get('http://localhost:8080/api/book/');
  }

  getAllLibraries(): Observable<any> {
    return this.http.get('http://localhost:8080/api/library/');
  }

  getLibrary(id: number): Observable<any> {
    return this.http.get('http://localhost:8080/api/library/'+id);
  }

  createLibrary(library): Observable<any> {
    return this.http.post('http://localhost:8080/api/library/', library);
  }

  createBook(book): Observable<any> {
    return this.http.post('http://localhost:8080/api/book/'+book.libraryNumber+'/', book);
  }

}