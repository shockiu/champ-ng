import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SkeletonModule } from 'primeng/skeleton';
import { CardModule } from 'primeng/card';



const PrimeNgModules = [
    InputTextModule,
    ButtonModule,
    SkeletonModule,
    CardModule
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