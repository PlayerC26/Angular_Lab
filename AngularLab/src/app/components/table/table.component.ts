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

  constructor(private userService: UserServiceService ){}

  personas: Persona[] = [];

  ngOnInit() {
    this.personas = this.userService.getPersonas();
  }


}
