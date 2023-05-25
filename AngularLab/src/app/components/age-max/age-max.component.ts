import { Component } from '@angular/core';
import { SwitchService } from 'src/app/services/switch.service';

@Component({
  selector: 'app-age-max',
  templateUrl: './age-max.component.html',
  styleUrls: ['./age-max.component.scss']
})
export class AgeMaxComponent {

  constructor(private notificaciones: SwitchService) { }

  titulo = '';
  descripcion = '';

 

  ngOnInit() {

    this.notificaciones.$noti.subscribe((valor) => this.notificaciones = valor);
    this.notificaciones.$title.subscribe((valor) => this.titulo = valor);
    this.notificaciones.$descrip.subscribe((valor) => this.descripcion = valor);

  }

  closeNotif() {

    if(this.notificaciones.$noti.subscribe(true)){
      this.notificaciones.$noti.emit(false);
    }
    
  }

}
