import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MAIN_ROUTES} from './app-routing';
import {ProductarrayComponent} from "./productarray/productarray.component";
import {ProductdetailsComponent} from "./productdetails/productdetails.component";


const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(MAIN_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
