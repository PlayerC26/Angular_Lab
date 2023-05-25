import { Component } from '@angular/core';
import { SwitchService } from './services/switch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'AngularLab';

  constructor(private modalS: SwitchService, private notificaciones: SwitchService){}
 

  swithModal: boolean = false;
  notif: boolean = false;

  openModal(){

    this.swithModal = true;
  }

  closeModal(){
    this.modalS.$modal.emit(false);
  }
  
  ngOnInit(){
    
    this.modalS.$modal.subscribe((valor)=> this.swithModal=valor);
    this.notificaciones.$noti.subscribe((valor)=> this.notif=valor);
    
  }
    
  
}
