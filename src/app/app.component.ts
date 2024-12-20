import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'ngRouting';

  token: string | null = null

  constructor(private router: Router){}

  ngOnInit(): void {
    this.token = sessionStorage.getItem('token')
  }

  logout(){
    sessionStorage.removeItem('token')
    this.router.navigate(['login'])
  }
}


