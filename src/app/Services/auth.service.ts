import { inject, Injectable } from '@angular/core';
import { UserService } from './user.service';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogged: Boolean = false;
  userService: UserService = inject(UserService)

  login(username: string , password: string){
    let user = this.userService.users.find((us) => us.username === username && us.password === password)

    if(username === undefined){
      this.isLogged = false;
    }else{
      this.isLogged = true;
    }
    return user
  }
  logOut(){
    this.isLogged = false;
  }

  isAuthenticated(){
    return this.isLogged;
  }
}
