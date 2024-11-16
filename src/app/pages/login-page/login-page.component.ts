import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent implements OnInit {
  
  
  constructor(private router:Router, private authService: AuthService){}

  ngOnInit(): void {
    let token = sessionStorage.getItem('token')

    if(token){
      this.router.navigate(['home'])
    }
  }
  
  loginUser(value: any){

    let {email, password} = value;

    this.authService.login(email, password).subscribe(
      (response) => {
        sessionStorage.setItem('token', response.token)
        this.router.navigate(['home'])
      },
      (error) => console.error(`Ha ocurrido un error ${error}`),
      () => console.info('Se a completado la llama de login a REQRES')
    )

  }

}
