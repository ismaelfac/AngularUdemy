import { Component, OnInit } from '@angular/core';
import {CLientWrapper} from '../infrastructure/ClientWrapper';
import {AllServices} from "../domain/AllServices";

@Component({
  selector: 'app-customer-component',
  templateUrl: './customer-component.component.html',
  styleUrls: ['./customer-component.component.css']
})
export class CustomerComponentComponent implements OnInit {
  client: any; 
  AllService : any;
  Items: any;

  constructor() { 
    this.client = new CLientWrapper();
    this.AllService = new AllServices(this.client);
  }

  ngOnInit(): void {
    this.AllService.requestAllItems(this.Items = response.data)
  }

}
