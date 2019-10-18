import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HttpClientService } from '../service/http-client.service';
import { Router} from '@angular/router';
import {CartserviceService} from "../cartservice.service";

@Component({
  selector: 'app-productarray',
  templateUrl: './productarray.component.html',
  styleUrls: ['./productarray.component.scss'],
})

export class ProductarrayComponent implements OnInit {
  products:string[];
  id: number;
  price: string;
  name:string;
  image:string;
  details:string;
  x='asc';
  y='price'
  constructor(
    private httpClientService:HttpClientService,
    private router:Router,
    private cart: CartserviceService
  ) { }

  ngOnInit() {
    this.httpClientService.getEmployees().subscribe(
      response =>this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response)
  {
    this.products=response;
  }
  fun(s)
  {
    this.router.navigate(['/products', s.id, s.price,s.name,s.image,s.details]);
  }
  hello()
  {
   this.x='asc';
   this.y='price';
  }
  hello1()
  {
    this.x='dsc';
    this.y='price';
  }
  hello2()
  {  this.x='asc';
    this.y='name'
  }
  hello3()
  {

  }
  addThisToCart(id1) {
    this.cart.addToCart(id1).subscribe( (data) =>
      console.log(data));
    alert('Added to Cart');
  }
  fun1(s)
  {

    this.router.navigate(['products1',s.id, s.price,s.name,s.image,s.details]);
  }


}
