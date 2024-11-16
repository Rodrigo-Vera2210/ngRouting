import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent implements OnInit {
  
  loginForm: FormGroup = new FormGroup({})
  @Output() loginAction: EventEmitter<{}> = new EventEmitter<{}>()


  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    })
  }

  get email(){
    return this.loginForm.get('email')
  }

  get password(){
    return this.loginForm.get('password')
  }

  submitLogin(){
    if(this.loginForm.valid){
      console.table(this.loginForm.value);
      this.loginAction.emit(this.loginForm.value)
      //this.loginForm.reset();
    }
  }

}
