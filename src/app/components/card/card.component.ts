import { Component, OnInit, Input } from '@angular/core';
import { FavoriteService } from 'src/app/services/favorite.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() DataIntro:any;
  public image:string = '';

  constructor(private favorites: FavoriteService) { }

  ngOnInit(): void {
    this.image = '';
  }

  addFavorite():void {
    this.favorites.disparadordefavoritos.emit({data: this.DataIntro});
  }

}
