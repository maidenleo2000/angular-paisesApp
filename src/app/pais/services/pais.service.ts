import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl:string = 'https://restcountries.com/v3.1';

  get httpParam(){
    return new HttpParams().set('fields', 'name,capital,cca2,ccn3,flags,population');
  }

  constructor(private http: HttpClient) { }


  //La funcion buscarPais es un método que recibe un TERMINO y retorna un OBSERVABLE
  buscarPais(termino:string): Observable<Pais[]>{ //aca le agrego el tipo del observable. El tipo lo tomo de la interfaz que agregue usando una respuesta de la peticion en Postman y generando la interfaz en la web https://app.quicktype.io/
    const url = `${this.apiUrl}/name/${termino}`
    // return this.http.get(url)
    // .pipe(
    //   catchError(err => of([])) //Esta funcion captura el error y retorna un arreglo vacío. Tambien puedo pasar un string para que sea devuelto si quiero entre los []
    // )

    return this.http.get<Pais[]>(url); //En el GET tambien va el tipado devuelto que es el mismo que el observable de arriba
  }

  buscarCapital(termino:string): Observable<Pais[]>{

    const urlcap = `${this.apiUrl}/capital/${termino}`
    return this.http.get<Pais[]>(urlcap, {params: this.httpParam});
  }

  getPaisPorCodigo(id:string): Observable<Pais>{

    const url = `${this.apiUrl}/alpha/${id}`
    return this.http.get<Pais>(url);
  }

  buscarRegion(region:string): Observable<Pais[]>{    
    const urlreg =  `https://restcountries.com/v2/regionalbloc/${region}`
    return this.http.get<Pais[]>(urlreg, {params: this.httpParam})
  }

  buscarRegionV3(region:string): Observable<Pais[]>{  
    // const httpParams = new HttpParams()
    //   .set('fields', 'name,capital,cca2,ccn3,flags,population');
    
    //const urlreg =  `${this.apiUrl}/region/${region}?fields=name,capital,cca2,ccn3,flags,population`
    const urlreg =  `${this.apiUrl}/region/${region}`
    return this.http.get<Pais[]>(urlreg, {params: this.httpParam}) //de esta forma le paso los parametros para filtrar los datos que pide
    .pipe(
      tap(console.log)
    )
  }


}
