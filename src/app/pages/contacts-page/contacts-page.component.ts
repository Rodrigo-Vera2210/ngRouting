import { Component, OnInit } from '@angular/core';
import { IContacto } from '../../models/contact.interface';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrl: './contacts-page.component.scss'
})
export class ContactsPageComponent implements OnInit{

  filtroSexo: string = 'todos'
  listaContactos: IContacto[] = []

  constructor(private router:Router, private route: ActivatedRoute, private contactService: ContactService){}

  ngOnInit(): void {


    this.route.queryParams.subscribe((params: any) => {
      console.log('QueryParam:',params.sexo);
      if(params.sexo){
        this.filtroSexo = params.sexo
      }
      this.contactService.obtenerContactos(this.filtroSexo)?.then(
        (lista) => this.listaContactos = lista
      )
      .catch((error) => console.error(`Ha habido un error al obtener los contactos: ${error}`))
      .finally(() => console.info('Peticion de contactos terminada'))
    })


  }

  volverAHome(contacto: IContacto){

    let navigationExtras: NavigationExtras = {
      state: {
        data: contacto
      }
    }

    this.router.navigate(['/home'], navigationExtras)
  }

  
}
