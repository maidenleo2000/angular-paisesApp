import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl:string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }


  //La funcion buscarPais es un método que recibe un TERMINO y retorna un OBSERVABLE
  buscarPais(termino:string): Observable<any>{
    const url = `${this.apiUrl}/name/${termino}`
    // return this.http.get(url)
    // .pipe(
    //   catchError(err => of([])) //Esta funcion captura el error y retorna un arreglo vacío. Tambien puedo pasar un string para que sea devuelto si quiero entre los []
    // )

    return this.http.get(url);
  }

}
