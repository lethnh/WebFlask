import { Injectable } from '@angular/core';
import { DataProduct } from '../components/product/data';
import { Product } from '../components/product/Product';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // private data = DataProduct;
  private data = [...DataProduct];
  private urlAPI = 'http://5ca73f898e58df0014602f4a.mockapi.io/products';
  constructor(private http: HttpClient) { }

  addProduct(product): Observable<Product> {
    return this.http.post<Product>(this.urlAPI, product);
  }

  getListProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.urlAPI);
  }

  deleteProduct(product): Observable<Product> {
    const url = `${this.urlAPI}/${product.id}`;
    return this.http.delete<Product>(url);
  }

  getProduct(id: number): Observable<Product> {
    const url = `${this.urlAPI}/${id}`;
    return this.http.get<Product>(url);
  }

  editProduct(product): Observable<Product> {
    const url = `${this.urlAPI}/${product.id}`;
    console.log(product);
    return this.http.put<Product>(url, product);
  }
}
