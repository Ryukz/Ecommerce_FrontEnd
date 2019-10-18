import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
export class products{
  constructor(
  public name:string,
  public image:string,
  public id:number,
  public price:string
  ){}
}
@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) { }
  getEmployees()
  {
    console.log("test call");
    return this.httpClient.get<products[]>('http://localhost:8082/show/all');

  }
  getId(id: number)
  {
    return this.httpClient.get<products[]>('http://localhost:8082/show/product/'+id);
  }
}
