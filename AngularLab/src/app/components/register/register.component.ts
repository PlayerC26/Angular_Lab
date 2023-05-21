import { Component } from '@angular/core';
import { SwitchService } from 'src/app/services/switch.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private modalS: SwitchService){
  }

  closeModal(){
    this.modalS.$modal.emit(false);
  }

}
