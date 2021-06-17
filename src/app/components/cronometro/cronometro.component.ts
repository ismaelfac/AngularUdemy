import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {

  contador: number;
  interval: any;
  mensaje: string;

  constructor() { 
    this.contador = 12;
    this.mensaje = '';
   }

  ngOnInit(): void {
    
  }

  onStart($event:any) {
    this.interval =  setInterval(() => {
      this.contador--;
      if(this.contador === 0) { clearInterval(this.interval) }
    }, 1000);
    console.log($event.target.id);
  }

  onReset($event:any) {
    console.log($event.target);
    if(this.contador <= 5) { 
      clearInterval(this.interval);
      this.contador = 12;
    }
  }

  onChangeSelect($event:any) {
    console.log($event.target.value);
  }

  onMouseEnter() {
    this.mensaje = "Estoy en el DIV";
  }

  onMouseOut() {
    this.mensaje = "Estoy saliendo del DIV";
  }

}
