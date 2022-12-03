import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  constructor(
    private rutaActivada: ActivatedRoute,
    private PaisService: PaisService
    ) { }

  ngOnInit(): void {


    this.rutaActivada.params
    .pipe(
      switchMap( (param) => this.PaisService.getPaisPorCodigo(param['id']) )
    )
    .subscribe(resp =>{
      console.log(resp)
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
