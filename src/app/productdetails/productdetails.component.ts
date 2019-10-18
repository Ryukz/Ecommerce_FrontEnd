import { Component, OnInit } from '@angular/core';
import {HttpClientService, products} from "../service/http-client.service";
import {ActivatedRoute} from "@angular/router";
import {CartserviceService} from "../cartservice.service";

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss'],
})
export class ProductdetailsComponent implements OnInit {
  products:string[];
  x=0;
  public userId;
  public price;
  public name;
  public image;
  public deatils;
  constructor( private httpClientService:HttpClientService, private route: ActivatedRoute, private cart: CartserviceService

  ) { }

  ngOnInit() {
    this.httpClientService.getEmployees().subscribe(
      response =>this.handleSuccessfulResponse(response),
    );
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.userId = id;
    let p = parseInt(this.route.snapshot.paramMap.get('price'));
    this.price = p;
    let i = (this.route.snapshot.paramMap.get('name'));
    this.name = i;
    let k = (this.route.snapshot.paramMap.get('image'));
    this.image = k;
    let k1 = (this.route.snapshot.paramMap.get('deatils'));
    this.deatils = k1;
  }

  handleSuccessfulResponse(response)
  {
    this.products=response;
  }
  addThisToCart(id1) {
    this.cart.addToCart(id1).subscribe( (data) =>
      console.log(data));
    alert('Added to Cart');
  }

}
