import { EventEmitter, Injectable } from '@angular/core';
import { Persona } from '../components/register/Persona';

@Injectable({
  providedIn: 'root'
})
export class SwitchService {

  constructor() { }


  $modal = new EventEmitter<any>();
  

  

}
 