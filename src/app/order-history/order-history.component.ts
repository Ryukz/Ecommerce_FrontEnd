import { Component, OnInit } from '@angular/core';
import {CartserviceService} from "../cartservice.service";
import {Router} from '@angular/router';
import  {ProductdetailsComponent} from "../productdetails/productdetails.component";
import {HttpClientService, products} from "../service/http-client.service";

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {

  private OrderHistory;
  constructor(private cartService: CartserviceService, private router: Router) { }

  ngOnInit() {
    this.cartService.showOrderHistory().subscribe(data => this.OrderHistory = data);
  }

  checkDetails(order) {
    this.router.navigate(['/products']);
  }

  continueShopping() {
    this.router.navigate(['products/all']);
  }
}
