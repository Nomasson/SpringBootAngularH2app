import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private baseUrl = 'http://localhost:8080/api/items';

  constructor(private http: HttpClient) { }

  getItem(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createItem(item: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, item);
  }

  deleteItem(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  updateItem(item: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/update`, item);
  }

  getItemsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getItemsById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/id/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, { responseType: 'text' });
  }
}
