import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

export interface User {
  // user_id: number;
  name: string;
  email: string;
  // phoneNumber: string;
  password: string;
  // status: boolean;
  // role: string;
   username: string;
}
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  // tslint:disable-next-line:variable-name
  userName: string;
  private url = 'http://localhost:8082';
  constructor(private http: HttpClient) { }
  // tslint:disable-next-line:no-shadowed-variable
  public addUsers(user) {
    //  const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(user.name + ':' + user.password) });
    return this.http.post<User>(this.url + '/adduser', user);
  }
}
