import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../components/category/Category';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private urlAPI = 'http://5ca73f898e58df0014602f4a.mockapi.io/Category';
  constructor(private http: HttpClient) { }

  addCategory(category): Observable<Category> {
    return this.http.post<Category>(this.urlAPI, category);
  }

  getListCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(this.urlAPI);
  }

  deleteCategory(category): Observable<Category> {
    const url = `${this.urlAPI}/${category.id}`;
    return this.http.delete<Category>(url);
  }

  getCategory(id: number): Observable<Category> {
    const url = `${this.urlAPI}/${id}`;
    return this.http.get<Category>(url);
  }

  editCategory(category): Observable<Category> {
    const url = `${this.urlAPI}/${category.id}`;
    console.log(category);
    return this.http.put<Category>(url, category);
  }
}
