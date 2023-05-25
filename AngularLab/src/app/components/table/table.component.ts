import { Component } from '@angular/core';
import { SwitchService } from 'src/app/services/switch.service';
import { Persona } from '../register/Persona';
import { UserServiceService } from '../register/user-service.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  constructor(private userService: UserServiceService, private notif:SwitchService){}

  personas: Persona[] = [];
  notificacion: boolean = false;

  
  public descrip:string = '';
  public infoUser:string = '';

  ngOnInit() {
    this.personas = this.userService.getPersonas(); //obtiene todo el array cuando inicia
    this.notif.$noti.subscribe((valor)=> this.notificacion=valor);
  }

  onClickBoton(index: number) {

    const elementoSeleccionado = this.personas[index]; // Obtener elemento del array
    const edad= elementoSeleccionado.edad; // Obtener el atributo "edad" del elemento
    this.infoUser = elementoSeleccionado.cedula;
    
    if (parseInt(edad)  > 18) {
      this.descrip = "Es mayor de edad";

    } else{
      this.descrip = "Es menor de edad";
    } 
    if(this.notificacion == false){
      this.notif.$noti.emit(true);
    }
    
    
  }
  enviarDatos(){

      this.notif.$title.emit(this.descrip);
      this.notif.$descrip.emit(this.infoUser);
  }

  userDelete(index:number){

    this.userService.deleteUser(index);
    
  }

}
