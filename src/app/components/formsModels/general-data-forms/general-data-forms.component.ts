import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GeneralDataEstate } from 'src/app/models/generalDataEstate.models';
import { GeneralsDataService } from 'src/app/services/generals-data.service';

@Component({
  selector: 'general-data-forms',
  templateUrl: './general-data-forms.component.html',
  styleUrls: ['./general-data-forms.component.css']
})
export class GeneralDataFormsComponent implements OnInit {
  @Input() EstateId: string = '';
  frmGeneralData: FormGroup;
  cmdEstateType: string = '';
  tipo_inmueble: [] = [];
  cmdMunicipality: string = '';
  cmdStratum: string = '';
  cmdBedrooms: string = '';
  cmdBathrooms: string = '';
  ckNewEstate: boolean = false;
  ckExclusiveness: boolean = false;
  ckTracing: boolean = false;

  constructor(private generalsDataService: GeneralsDataService) { 
    this.frmGeneralData = new FormGroup({
      cmdEstateType: new FormControl('', [
          Validators.required
        ]),
        cmdMunicipality: new FormControl('', [
          Validators.required
        ]),
        cmdStratum: new FormControl('', [
          Validators.required
        ]),
        cmdBedrooms: new FormControl('', [
          Validators.required
        ]),
        cmdBathrooms: new FormControl('', [
          Validators.required
        ]),
        cmdEstateDestination: new FormControl('', [
          Validators.required
        ]),
        ckExclusiveness: new FormControl('', [
          Validators.required
        ]),
        ckTracing: new FormControl('', [
          Validators.required
        ]),
    });
   }

  ngOnInit(): void {
  }

  onSubmit(): void {
    //'1','Apto','Barranquilla','2','2','1','Arriendo',true, true, true
    console.log('Este es el Id: '+this.EstateId);
    console.log(this.frmGeneralData.value.cmdEstateType);
    this.generalsDataService.create(new GeneralDataEstate(
        this.EstateId, 
        this.frmGeneralData.value.cmdEstateType,
        this.frmGeneralData.value.cmdMunicipality,
        this.frmGeneralData.value.cmdStratum,
        this.frmGeneralData.value.cmdBedrooms,
        this.frmGeneralData.value.cmdBathrooms,
        this.frmGeneralData.value.cmdEstateDestination,
        this.frmGeneralData.value.ckExclusiveness,
        this.frmGeneralData.value.ckTracing,
        this.frmGeneralData.value.ckNewEstate
      ));
      console.log(this.generalsDataService.getGeneralDataEstate());
  }

}
