import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {
  @Input() EstateId: string = ''; 
  constructor() { }

  ngOnInit(): void {
  }

}
