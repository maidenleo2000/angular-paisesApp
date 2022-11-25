import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';


const routes: Routes = [
    {
        path: '',
        component: PorPaisComponent,
        pathMatch: 'full'
    },
    {
        path: 'region',
        component: PorRegionComponent
    },
    {
        path: 'capital',
        component: PorCapitalComponent
    },
    {
        path: 'pais/:id',
        component: VerPaisComponent
    },
    {
        path: '**', //Esto es cualquier otra ruta que no sean las anteriores
        //component: 404component ESTO ES ALGO QUE SE PUEDE HACER, EN ESTE CASO REDIRIGIMOS A LA PRINCIPAL NADA MAS
        redirectTo: ''
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes) //este modulo va a hacer las configuraciones de la ruta. Se le pasa como parámetro el array de rutas creado arriba
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{

}