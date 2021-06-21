import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-general-data',
  templateUrl: './general-data.component.html',
  styleUrls: ['./general-data.component.css']
})
export class GeneralDataComponent implements OnInit {

  generalDataEstateId: number = 0;
  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.parent?.params.subscribe(params => {
      this.generalDataEstateId = params.inmuebleId;
    });
  }

}
