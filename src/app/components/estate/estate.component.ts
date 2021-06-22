import { Component, OnInit } from '@angular/core';
import { Estate } from 'src/app/models/estate.models';
import { EstatesService } from 'src/app/services/estates.service';

@Component({
  selector: 'estate',
  templateUrl: './estate.component.html',
  styleUrls: ['./estate.component.css']
})
export class EstateComponent implements OnInit {
  estates: any;
  constructor(private estateService: EstatesService) { }

  ngOnInit(): void {
    this.estates = this.estateService.getAll();
  }

  onClickCreateEstate(): void {
    console.log('evento onClickCreateEstate');
    this.estateService.create(new Estate('4','APTO CASA REAL', 'APTO1', 5, true));
    this.estateService.create(new Estate('5','APTO CASA REAL', 'APTO2', 5, false));
  }

  async onClickAssets(): Promise<any> {
    try {
      console.log('evento onClickAssets');
      this.estates = await this.estateService.assetsV2compressed();
    } catch (e) {
      console.log(e);
    }
  }

}
