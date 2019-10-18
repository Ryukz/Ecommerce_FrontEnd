import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ProductserviceService} from "../productservice.service";
import {CartserviceService} from "../cartservice.service";
import {AuthenticationService} from '../authentication.service';
import {Product} from "../productservice.service";
import {HttpClientService} from "../service/http-client.service";
import {ProductClass} from "../ProductClass";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class  EditProductComponent implements OnInit{

  private productId;
  private product;
  // public price;
  // public name;
  // public image;
  // public deatils;

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductserviceService,
              private loginService: AuthenticationService, private p: HttpClientService
  ) {
  }
  private products: Product=new class implements Product
  { id;
  category;
  details;
  image;
  name;
  price;

  }

  ngOnInit() {
    // this.route.paramMap.subscribe((params: ParamMap) => {
    //   // tslint:disable-next-line:radix
    //   const id = parseInt(params.get('id'));
    //   this.productId = id;
    // });
    // this.productService.getProduct(this.productId).subscribe(data => this.product = data);
    let p = parseInt(this.route.snapshot.paramMap.get('price'));
    this.products.price = p;
    let i = (this.route.snapshot.paramMap.get('name'));
    this.products.name = i;
    let k = (this.route.snapshot.paramMap.get('image'));
    this.products.image = k;
    let k1 = (this.route.snapshot.paramMap.get('deatils'));
    this.products.details = k1;
    let k3 = parseInt(this.route.snapshot.paramMap.get('id'));
    this.products.id = k3;
    // console.log(this.products.image);
  }

  editProduct() {
    console.log(this.products);
    alert('Product Details updated successfully.');
    this.productService.editProductDetails(this.products).subscribe(data => {
      this.products = data;

      this.router.navigate(['productarray']);
    });

  }
}



