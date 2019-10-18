import {HomeComponent} from './home/home.component';
import {Routes} from '@angular/router';
import {SignupComponent} from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProductarrayComponent } from './productarray/productarray.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import {EmployeeComponent} from "./employee/employee.component";
import {ProductdetailsComponent} from "./productdetails/productdetails.component";
import {LogoutComponent} from "./logout/logout.component";
import {AlexComponent} from "./alex/alex.component";
import {PagenotfoundComponent} from "./pagenotfound/pagenotfound.component";
import {AddtoproductComponent} from "./addtoproduct/addtoproduct.component";
import {OrderHistoryComponent} from "./order-history/order-history.component";
import {EditProductComponent} from "./edit-product/edit-product.component";



// import { ProductListComponent } from './product-list/product-list.component';

export const MAIN_ROUTES: Routes = [    /*custom routes stored as array*/
  {
    path: '',               /*in case of no / in uri this component will redirected to*/
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home' , component : HomeComponent       /*on matching this uri HC will be opened*/
  },
  {
    path: 'signup' , component : SignupComponent
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'productarray',component:ProductarrayComponent
  },
  {
    path:'usercart',component:UserCartComponent
  },
  {
    path:'employee',component:EmployeeComponent
  },
  {
    path:'productdeatils',component:ProductdetailsComponent
  },
  { path: 'logout', component: LogoutComponent },
  // {path: '', component: LoginComponent},
  {
    path:'products/:id/:price/:name/:image/:deatils',component:ProductdetailsComponent
  },
  {
    path:'alex',component:AlexComponent
  },
  {
    path:'addtoproduct',component:AddtoproductComponent
  },
  {
    path:'orderHistory',component:OrderHistoryComponent
  },
  {
    path:'product-deatil/:id',component:ProductdetailsComponent
  },
  {
    path:'products1/:id/:price/:name/:image/:deatils',component:EditProductComponent
  },
  { path : 'editProduct', component: EditProductComponent},
  {
    path:'**',component:PagenotfoundComponent
  }
];
