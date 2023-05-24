import { Component, OnInit } from '@angular/core';
import { SwitchService } from 'src/app/services/switch.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from './Persona';
import { UserServiceService } from './user-service.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  // public formData: any;
  
  constructor(private modalS: SwitchService, private userService: UserServiceService) { }


  personas: Persona[] = [];


  closeModal() {
    this.modalS.$modal.emit(false);
  }


  userRegister( nombre: string, apellido: string, edad: string, cedula: string) {

    const persona = new Persona(nombre,apellido, edad, cedula);
    this.userService.addUser(persona);
    //console.log(this.userService.getPersonas());
  }



}


