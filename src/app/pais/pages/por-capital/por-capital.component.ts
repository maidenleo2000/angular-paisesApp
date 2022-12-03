import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino:string = '';
  hayError: boolean = false;  
  capitales: Pais[] = [];

  constructor(private PaisService: PaisService) { }



  buscar(termino:string){
    this.hayError = false;
    this.termino = termino; //le asigno termino a this.termino porque termino es el evento que recibo del output
    console.log(this.termino);
    this.PaisService.buscarCapital(this.termino).subscribe((arr) =>{
      
      console.log(arr);
      this.capitales = arr; //le paso el resultado de la busqueda directamente que es un array
      
    }, (err) => {
          console.log('Error!');
          console.info(err);
          this.hayError = true;
          this.capitales=[];
    });
    //Para que se ejecute un observable tiene que tener como mínimo un suscribe, sino no se ejecuta.
  }

  sugerencias(termino:string){
    this.hayError = false;
    
  }

  teclaPresionada(){
    console.log('teclapresionada');
  }

 

}
