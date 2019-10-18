import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {AuthenticationService} from "../authentication.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router:Router,
    private isLogin:AuthenticationService
  ) { }

  ngOnInit() {
  }

  fun()
  {  alert('Logout Sucessfull');
    this.isLogin.logOut();
    this.router.navigate(['home']);
    window.location.reload();
  }

}
