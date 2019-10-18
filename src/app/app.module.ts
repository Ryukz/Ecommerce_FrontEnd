import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductarrayComponent } from './productarray/productarray.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { AlexComponent } from './alex/alex.component';
import { FooterComponent } from './footer/footer.component';
// import { EmployeComponent } from './employe/employe.component';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { EmployeeComponent } from './employee/employee.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { LogoutComponent } from './logout/logout.component';
import { OrderbypipePipe } from './orderbypipe.pipe';
import { TablesortPipe } from './tablesort.pipe';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AddtoproductComponent } from './addtoproduct/addtoproduct.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { MyAccountComponent } from './my-account/my-account.component';
// import {ProductListComponent} from './product-list/product-list.component';
// imports: [
// BrowserModule,
// AppRoutingModule,
// ProductListComponent
// ];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    SignupComponent,
    HomeComponent,
    LoginComponent,
    ProductarrayComponent,
    UserCartComponent,
    AlexComponent,
    FooterComponent,
    EmployeeComponent,
    ProductdetailsComponent,
    LogoutComponent,
    OrderbypipePipe,
    TablesortPipe,
    PagenotfoundComponent,
    AddtoproductComponent,
    OrderHistoryComponent,
    EditProductComponent,
    MyAccountComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
