import { Component, OnInit } from '@angular/core';
import { SwitchService } from 'src/app/services/switch.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Persona } from './Persona';
import { UserServiceService } from './user-service.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

   public myForm:  FormGroup;

  constructor(private modalS: SwitchService, private userService: UserServiceService) {
  
    this.myForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', [Validators.required]),
      edad: new FormControl('', [Validators.required]),
      cedula: new FormControl('', [Validators.required])
      // Añade más campos y validaciones según tus necesidades
    });
  }

  public descrip:string = '';
  public infoUser:string = '';
  notificacion: boolean = false;

  personas: Persona[] = [];

  public contmen: number = 0;
  public contmay: number = 0;


  ngOnInit(){
    this.modalS.$noti.subscribe((valor)=> this.notificacion=valor);
  }

  


  userRegister(nombre: string, apellido: string, edad: string, cedula: string) {

    const persona = new Persona(nombre, apellido, edad, cedula);

    if (parseInt(persona.edad) > 17) {

      this.contmay++;
      this.modalS.$conta.emit(this.contmay);

    } else {
      this.contmen = this.contmen + 1;
      this.modalS.$contb.emit(this.contmen);
    }



    this.userService.addUser(persona);

  }

  closeModal() {
    this.modalS.$modal.emit(false);
  }




}


