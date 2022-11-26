import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino:string = 'Honduras';
  hayError: boolean = false;
  paises: Pais[] = [];

  constructor(private PaisService: PaisService) { }

  buscar(){
    this.hayError = false;
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

}
