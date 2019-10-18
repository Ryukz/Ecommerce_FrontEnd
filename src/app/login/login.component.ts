import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../authentication.service';
import {UserServiceService} from '../userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private password: string;
  private username: string;
  private invalidLogin: boolean;

  constructor(private router: Router, private loginservice: AuthenticationService,
              private use: UserServiceService) {
    this.username = '';
    this.password = '';
    this.invalidLogin = false;
  }

  ngOnInit() {
  }

  checkLogin() {
    console.log('checking your credentials');
    this.loginservice.authenticate(this.username, this.password).subscribe(data => {
      this.router.navigate(['home']);
      alert('Your login is succesfull !');
      this.invalidLogin = false;
    });
    this.invalidLogin = true;

  }
}
