import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Rol } from './models/rol.enum';
import { User } from './models/user.model';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokeapifront';

  currentUser: User = new User;

  constructor( private authenticationService: AuthenticationService, private router: Router){
    this.authenticationService.currentUser.subscribe(data=>{
      this.currentUser= data;
    });
  }

  isAdmin(){
    return this.currentUser?.role === Rol.ADMIN;
  }

  logOut(){
    this.authenticationService.logOut();
    this.router.navigate(['/login']);
  }

}
