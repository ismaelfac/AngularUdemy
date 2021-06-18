import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sumar',
  templateUrl: './sumar.component.html',
  styleUrls: ['./sumar.component.css']
})
export class SumarComponent implements OnInit {

  num1: number;
  num2: number;
  resultado: number;

  constructor() { 
    this.num1 = 4;
    this.num2 = 37;
    this.resultado = 0;
   }

  ngOnInit(): void {
  }

  onClick() {
    this.resultado = this.num1 + this.num2;
  }

}
