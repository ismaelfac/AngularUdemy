import { Injectable } from '@angular/core';
import { Estate } from '../models/estate.models';

@Injectable({
  providedIn: 'root'
})

export class EstatesService {

  estates: Estate[];

  constructor() { 
      this.estates = [
        new Estate('CASA DE 2 PISOS ANDA LUCIA EST4', 'CASA', 2 , true),
        new Estate('APTO LAS TRINITARIAS EST4', 'APTO', 8, true),
        new Estate('BODEGA VIA 40 450MTS', 'BODEGA', 15, false),
      ];
   }

   getAll() {
     return this.estates;
   }

   create(estateNew: Estate) {
     this.estates.push(estateNew);
   }

   assets(): Promise<Estate[]> {
      const prom = new Promise<Estate[]>((resolve, reject) => {
        const arrTemp: Estate[] = [];
        for(let estate of this.estates) {
          if(estate.isActive) {
            arrTemp.push(estate);
          }
        }
        resolve(arrTemp);
      }); 
      return prom;
   }

  assetsV2(): Promise<Estate[]> {  //recomendado, para no bloquee el resto de componentes en caso se demore la respuesta del servidor
    return new Promise((resolve, reject) => {
      const arrTemp = this.estates.filter(estate => {
        return estate.isActive;
      });
      resolve(arrTemp);
    });
  }

  assetsV2compressed(): Promise<Estate[]> {
    return new Promise((resolve, reject) => {
      resolve(this.estates.filter(estate => estate.isActive));
    });
  }
}
