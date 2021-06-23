import { Injectable } from '@angular/core';
import { GeneralDataEstate } from '../models/generalDataEstate.models';

@Injectable({
  providedIn: 'root'
})
export class GeneralsDataService {

  generalDataEstate: GeneralDataEstate[];

  constructor() { 
    this.generalDataEstate = [];
  }
   create(generalDataEstateNew: GeneralDataEstate) {
    this.generalDataEstate.push(generalDataEstateNew);
  }
  getGeneralDataEstate() {
     return this.generalDataEstate;
  }
}
