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
  // private urlAPI = 'https://5ca73f898e58df0014602f4a.mockapi.io/products';
  private urlAPI = 'http://localhost:6969/api/product';
  constructor(private http: HttpClient) { }

  addProduct(product): Observable<Product> {
    console.log(product);
    const url = `${this.urlAPI}/create`;
    return this.http.post<Product>(url, product);
  }

  getListProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.urlAPI);
  }

  deleteProduct(id): Observable<Product> {
    console.log(id);
    debugger;
    const url = `${this.urlAPI}/delete/${id}`;
    return this.http.delete<Product>(url);
  }

  getProduct(id: number): Observable<Product> {
    const url = `${this.urlAPI}/findProductById/${id}`;
    return this.http.get<Product>(url);
  }

  editProduct(product): Observable<Product> {
    const url = `${this.urlAPI}/edit/${product.id}`;
    console.log(product);
    return this.http.put<Product>(url, product);
  }
}
