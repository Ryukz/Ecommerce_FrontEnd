import { Component, OnInit } from '@angular/core';
import {User, UserServiceService} from '../userservice.service';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router , private http: UserServiceService) { }
  // tslint:disable-next-line:new-parens
  private user: User = new class implements User {
    // tslint:disable-next-line:variable-name
    user_id;
    name;
    // tslint:disable-next-line:variable-name
    username;
    password;
    email;
    // tslint:disable-next-line:variable-name
    phoneNumber;
    status;
    role;
  };
  ngOnInit() {
  }
  /*submitData() {
    const json = {
      name = this.user.name
    }
  }*/
  addUsers(user) {
    alert('User Created Successfully!!' );
    this.http.addUsers(user).subscribe(data => {
      this.router.navigate(['login']);
    });

  }
  fun()
  {
    alert('User Created Successfully login');
  }
}
