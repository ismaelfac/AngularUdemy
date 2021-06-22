import { Injectable } from '@angular/core';
import { GeneralDataEstate } from '../models/generalDataEstate.models';

@Injectable({
  providedIn: 'root'
})
export class GeneralsDataService {

    generalDataEstate: GeneralDataEstate[];
  constructor() { 
    this.generalDataEstate = [
      new GeneralDataEstate('1','Apto','Barranquilla','2','2','1','Arriendo',true, true, true),
    ];
   }
   create(generalDataEstateNew: GeneralDataEstate) {
    this.generalDataEstate.push(generalDataEstateNew);
  }
   getGeneralDataEstate() {
     return
   }
}
