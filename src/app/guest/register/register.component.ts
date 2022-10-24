import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/models/user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  user: User = new User();
  faUser = faUserCircle;
  errorMessage: string= "";

  constructor(private authenticationServices: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    if(this.authenticationServices.currentUserValue?.id){
      this.router.navigate(['/profile']);
    }
  }

  register(){
    this.authenticationServices.register(this.user).subscribe(data=>{
      this.router.navigate(['/login']);
    },err=>{
      if(err?.status === 409){
        this.errorMessage= 'el nombre del usuario ya existe.'
      }else{
        this.errorMessage='Error inesperado. error es :'+ err?. errorMessage;
        console.log(err);
      }
    });
  }
}
