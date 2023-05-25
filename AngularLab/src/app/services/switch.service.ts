import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwitchService {

  constructor() { }


  $modal = new EventEmitter<any>();

  $noti = new EventEmitter<any>();
  $title = new EventEmitter<any>();
  $descrip = new EventEmitter<any>();


  $conta = new  EventEmitter<any>();
  $contb = new  EventEmitter<any>();
  

  

}
 