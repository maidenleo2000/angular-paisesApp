import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino:string = 'Honduras';
  hayError: boolean = false;

  constructor(private PaisService: PaisService) { }

  buscar(){
    this.hayError = false;
    console.log(this.termino);
    this.PaisService.buscarPais(this.termino).subscribe((resp) =>{
      
      console.log(resp);
      
    }, (err) => {
          console.log('Error!');
          console.info(err);
          this.hayError = true;
    });
    //Para que se ejecute un observable tiene que tener como mínimo un suscribe, sino no se ejecuta.
  }

}
