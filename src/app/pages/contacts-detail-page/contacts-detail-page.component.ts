import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IContacto } from '../../models/contact.interface';

@Component({
  selector: 'app-contacts-detail-page',
  templateUrl: './contacts-detail-page.component.html',
  styleUrl: './contacts-detail-page.component.scss'
})
export class ContactsDetailPageComponent implements OnInit {

  id: any | undefined
  contacto: IContacto = {
    id:0,
    nombre:'',
    apellidos:'',
    email:'',
    sexo:'hombre'
  }

  constructor(private route: ActivatedRoute){}
  
  ngOnInit(): void {
    this.route.params.subscribe(
      (params : any) => {
        if(params.id){
          this.id = params.id
        }
      }
    )

    // this.route.parent?.
  }

}
