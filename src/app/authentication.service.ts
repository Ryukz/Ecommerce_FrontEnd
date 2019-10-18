import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from './userservice.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
   public f=false;
  constructor(private http: HttpClient) {
  }
  authenticate(username, password) {
    const headers = new HttpHeaders({ Authorization : 'Basic ' + btoa(username + ':' + password) });
    return this.http.get('http://localhost:8082/checkUser', {headers}).pipe(
      map(
        userData => {
          sessionStorage.setItem('username', username);
          const authString = 'Basic ' + btoa(username + ':' + password);
          sessionStorage.setItem('basicAuth', authString);
          this.f=true;
          return userData;
        }
      )
    );
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('username');
    console.log(!(user === null));
    return !(user === null);

  }

  logOut() {
    sessionStorage.removeItem('username');

  }
}
