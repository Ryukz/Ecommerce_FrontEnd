import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from "./userservice.service";
import {Observable} from "rxjs";
import {ProductClass} from "./ProductClass";
export interface Product {
  id:number,
  category:string,
  details:string,
  image:string,
  name:string,
  price:number
}
@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  private url = 'http://localhost:8082';
  public productcategory:string[];
  constructor(private http: HttpClient) { }
  public addProduct(product)
  {
    return this.http.post<Product>(this.url + '/enterproduct', product);
  }
  public getProduct(id)
  {
       // @ts-ignore
    return this.http.get<Product>(this.url+'/show/product/',id);
  }
  getOneProduct(id: Number): Observable<ProductClass> {
    return this.http.get<ProductClass>(this.url + '/product-detail/' + id);
  }
  editProductDetails(product) {
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.post<ProductClass>(this.url + '/editProduct' , product, {headers});
  }
}
