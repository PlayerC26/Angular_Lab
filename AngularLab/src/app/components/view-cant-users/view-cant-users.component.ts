import { Component } from '@angular/core';
import { UserServiceService } from '../register/user-service.service';
import { RegisterComponent } from '../register/register.component';
import { SwitchService } from 'src/app/services/switch.service';

@Component({
  selector: 'app-view-cant-users',
  templateUrl: './view-cant-users.component.html',
  styleUrls: ['./view-cant-users.component.scss']
})
export class ViewCantUsersComponent {

  constructor(private cont: SwitchService){
  }

  menCant = 0;
  mayCant = 0;

  ngOnInit(){

    this.cont.$conta.subscribe((valor)=> this.mayCant=valor);
    this.cont.$contb.subscribe((valor)=> this.menCant=valor);

  }

}
