import { Injectable } from '@angular/core';
import { CategoryModel, ProductModel } from './products';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const api = "https://dummyjson.com/products";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(api);
  }

  getCategories(): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>(api + "categories");
  }

  get(id: number): Observable<ProductModel> {
    return this.http.get<ProductModel>(api + id);
  }
}