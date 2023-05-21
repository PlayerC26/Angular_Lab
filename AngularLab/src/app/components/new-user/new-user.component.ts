import { Component, OnInit } from '@angular/core';
import { SwitchService } from 'src/app/services/switch.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit{

  constructor(private modalS: SwitchService){}
 

  swithModal: boolean = false;

  openModal(){
  
    this.swithModal = true;
  }
  
  ngOnInit(){
    
    this.modalS.$modal.subscribe((valor)=> this.swithModal=valor);
    
  }
}
