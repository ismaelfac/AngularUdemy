import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-estate',
  templateUrl: './details-estate.component.html',
  styleUrls: ['./details-estate.component.css']
})
export class DetailsEstateComponent implements OnInit {

  inmuebleId: number = 0;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.inmuebleId = params.inmuebleId;
    })
  }

}
