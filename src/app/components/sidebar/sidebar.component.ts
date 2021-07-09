import { Component, OnInit } from '@angular/core';
import { FavoriteService } from 'src/app/services/favorite.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public ListCard:Array<any> = [];

  constructor(private favorites: FavoriteService) { }

  ngOnInit(): void {
    this.favorites.disparadordefavoritos.subscribe(data => {
      this.ListCard.push(data);
    })
  }

}
