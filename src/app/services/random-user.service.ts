import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { IRandomContact } from '../models/randomuser';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse){
    if(error.status === 0){
      console.error(`Ha ocurrido un error: ${error.error}`);
    }else{
      console.error(`Error en el backend: ${error.status}. El body de la respuesta es: ${error.error}`);
    }

    return throwError(() =>  
      new Error('Algo ha salido mal')
    )
  }
  


  obtenerRandomContact(): Observable<any>{
    return this.http.get('https://randomuser.me/api').pipe(
      catchError(this.handleError)
    )
  }

  obtenerRandomContacts(n: number): void{

  }

  obtenerRandomContactsPorGenero(sexo: string){

  }

}
