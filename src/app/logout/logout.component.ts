import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginComponent} from "../login/login.component";
import {AuthenticationService} from "../authentication.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private login:AuthenticationService) {

  }

  ngOnInit() {

  }

}

