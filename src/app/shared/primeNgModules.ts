import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';


const PrimeNgModules = [
    InputTextModule,
    ButtonModule
];

@NgModule({
    declarations: [],
    imports: [
        ...PrimeNgModules
    ], exports: [  
        ...PrimeNgModules 
    ]
  })
  export class PrimeNgModule { }