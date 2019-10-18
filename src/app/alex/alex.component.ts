import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';
import {OrderbypipePipe} from "../orderbypipe.pipe";

// @ts-ignore
@Component({
  selector: 'app-alex',
  templateUrl: './alex.component.html',

  styleUrls: ['./alex.component.scss'],



})


export class AlexComponent implements OnInit {
  products:string[];
  public name="";
  public colors=[

    {name:"Ankit",price:129},
    {name:"Alex",price:89}
  ];


  constructor(
    private httpClientService:HttpClientService
  ) { }

  ngOnInit() {    this.httpClientService.getEmployees().subscribe(
    response =>this.handleSuccessfulResponse(response),
  )
  }
  handleSuccessfulResponse(response)
  {
    this.products=response;
  }


  fun(s:string)
  {
    console.log(s);
  }
}
