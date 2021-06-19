import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  result: string = '';
  calculatorFinish: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(event: any) {
    if(this.calculatorFinish) { 
        this.result = event.target.innerText; 
        this.calculatorFinish = false;
      }else{ 
        this.result += event.target.innerText 
      }
  }

  onResult() {
    this.result = eval(this.result);
    this.calculatorFinish = true;
  }

}
