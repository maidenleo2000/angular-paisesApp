import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC'];

  regionesv3:string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  regionActiva: string = ''; 

  paises: Pais[] = []

  constructor(private paisService: PaisService) { }

  getClaseCSS(region:string):string{
    return (region === this.regionActiva) 
    ? 'btn btn-primary me-2 mb-1' 
    : 'btn btn-outline-primary me-2 mb-1';
  }

  activarRegion( region:string){
    if (region === this.regionActiva){return;}
    
    this.regionActiva = region;
    this.paises = [];

    //TODO: hacer llamado al servicio

  }

  buscar(region:string){
    console.log(region)
    this.paisService.buscarRegion(region).subscribe((arregloPaises)=>{
      this.paises = arregloPaises;
    })
  }

  buscarV3(region:string){
    console.log(region)
    this.paisService.buscarRegionV3(region).subscribe((arregloPaises)=>{
      this.paises = arregloPaises;
    })
  }
 

}
