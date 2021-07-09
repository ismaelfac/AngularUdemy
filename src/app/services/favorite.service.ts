import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  @Output() disparadordefavoritos: EventEmitter<any> = new EventEmitter();
  constructor() { }
}
