import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  listProducts(): Observable<any> {
    return this.http.get(`/api/phones`);
  }

  getProduct(id: number): Observable<any> {
    return this.http.get(`/api/phones/${id}`);
  }
}
