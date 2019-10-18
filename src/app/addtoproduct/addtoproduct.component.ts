import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {Product, ProductserviceService} from "../productservice.service";
import {User} from "../userservice.service";

@Component({
  selector: 'app-addtoproduct',
  templateUrl: './addtoproduct.component.html',
  styleUrls: ['./addtoproduct.component.scss']
})
export class AddtoproductComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router , private http:ProductserviceService) { }
  private product:Product=new class implements Product
  {
    id;
    category;
    details;
    image;
    name;
    price
  }


  ngOnInit() {
  }
  addProduct(product)
  {
    alert("Product added sucessfully!!!");
    this.http.addProduct(product).subscribe(data=>{
      this.router.navigate(['home']);
    })
  }


}
