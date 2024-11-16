import { Component, Input, OnInit } from '@angular/core';
import { RandomUserService } from '../../services/random-user.service';
import { IRandomContact, Results } from '../../models/randomuser';

@Component({
  selector: 'app-random-contact-page',
  templateUrl: './random-contact-page.component.html',
  styleUrl: './random-contact-page.component.scss'
})
export class RandomContactPageComponent implements OnInit{
  
  contact: IRandomContact | undefined

  constructor(private randomUserService: RandomUserService){}

  ngOnInit(): void {
    this.randomUserService.obtenerRandomContact().subscribe((response: Results) => {
      this.contact = response.results[0]
    })
  }

  obtenerNuevoContacto(){
    this.randomUserService.obtenerRandomContact().subscribe({
      next: (response: Results) => {
        this.contact = response.results[0]
      },
      error: (error) => console.error(`${error}`),
      complete: () => console.info('Pericion terminada')
    })
  }

}
