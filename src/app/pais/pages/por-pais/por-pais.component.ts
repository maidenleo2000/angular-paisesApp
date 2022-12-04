import { Component, Input, Output } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li{
        cursor:pointer;
      }
    `
  ]
})
export class PorPaisComponent {
  
  

  termino:string = '';
  hayError: boolean = false;  
  paises: Pais[] = [];

  paisesSugeridos: Pais[] = [];
  mostrarSugerencias:boolean = false;

  constructor(private PaisService: PaisService) { }

  buscar(termino:string){
    this.mostrarSugerencias = false;
    this.hayError = false;
    this.termino = termino; //le asigno termino a this.termino porque termino es el evento que recibo del output
    console.log(this.termino);
    this.PaisService.buscarPais(this.termino).subscribe((arr) =>{
      
      console.log(arr);
      this.paises = arr; //le paso el resultado de la busqueda directamente que es un array
      
    }, (err) => {
          console.log('Error!');
          console.info(err);
          this.hayError = true;
          this.paises=[];
    });
    //Para que se ejecute un observable tiene que tener como mínimo un suscribe, sino no se ejecuta.
  }

  sugerencias(termino:string){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    
    this.PaisService.buscarPais(termino)
    .subscribe(paises => this.paisesSugeridos = paises.splice(0,3),
    (err) => this.paisesSugeridos = []);
  }


  buscarSugerido(termino:string){
    this.buscar(termino);
    

  }

}
