import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  products:string[];
  constructor(
    private httpClientService:HttpClientService
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

}
