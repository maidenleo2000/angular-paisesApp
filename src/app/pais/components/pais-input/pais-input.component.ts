import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { CheckboxRequiredValidator } from '@angular/forms';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {
  
  @Input() place: string = '';

  @Output() onEnter: EventEmitter<string> = new EventEmitter(); //va <string> porque se va a emitir el termino, y el termino es del tipo string

  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  //debounce se usa para mostrar datos cuando la persona deja de escribir, una especie de predictivo

  debouncer:Subject<string> = new Subject();

  termino:string = '';


  //ngoninit se dispara una unica vez cuando el componente es creado y ya esta inicializado
  ngOnInit(): void {
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe(valor =>{
      //console.log('debouncer', valor)
      this.onDebounce.emit(valor);
    });
  }


  buscar(){
    // console.log('Hola Mundo');
    // console.log(this.termino);

    this.onEnter.emit(this.termino);
    this.debouncer.subscribe
  }

  // teclaPresionada(event:any){
  //   const valor = event.target.value;
  //   //console.log(valor); esto en caso de mandar el event, pero no lo aplica aca
  //   console.log(this.termino);
  // }
  

  teclaPresionada(){
    this.debouncer.next(this.termino);
  }

}
