import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  formulario: FormGroup;

  constructor() { 
    this.formulario = new FormGroup({
        nombre: new FormControl('', [
          Validators.required
        ]),
        apellido: new FormControl(''),
        edad: new FormControl(''),
        dni: new FormControl('', [
          Validators.minLength(6),
          Validators.maxLength(10)
        ]),
        password: new FormControl(''),
        repite_password: new FormControl(''),
        email: new FormControl('', [
          Validators.required,
          Validators.pattern(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/)
        ]), 
    });
   }
    
  ngOnInit(): void {
  }

  yearsOldValidator(formControl: any) {
    const value = formControl.value;
    console.log(value);
  }

  onSubmit(): void {
    console.log(this.formulario.value);
  }

}
