import { Injectable } from '@angular/core';
import { Persona } from './Persona';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }


  private userData: Persona[] = [];

  addUser(user: Persona) {
    this.userData.push(user);
  }

  getPersonas(): Persona[] {
    return this.userData;
  }

  deleteUser(userD: number) {
    this.userData.splice(userD, 1);
  }

}
