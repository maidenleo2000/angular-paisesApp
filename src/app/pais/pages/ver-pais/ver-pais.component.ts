import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Pais } from '../../interfaces/pais.interface';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Pais[]; // el signo ! le dice a TS que confie en mi que de momento puede ser nulo

  constructor(
    private rutaActivada: ActivatedRoute,
    private PaisService: PaisService
    ) { }

  ngOnInit(): void {


    this.rutaActivada.params
    .pipe(
      switchMap( (param) => this.PaisService.getPaisPorCodigo(param['id']) ),
      tap(console.log)
    )
    .subscribe(pais =>{
      //console.log(pais)
      this.pais = pais
    })

    // this.rutaActivada.params.subscribe( params =>{
    //   console.log(params['id']);



    //   this.rutaActivada.params.subscribe( ({id}) =>{
    //     console.log(id);

    //     this.PaisService.getPaisPorCodigo(id)
    //     .subscribe( pais =>{
    //       console.log(pais)
    //     });
    // });
  }

}
