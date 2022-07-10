import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from './primeNgModules';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';



@NgModule({
  declarations: [
    FooterComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    PrimeNgModule,
    FooterComponent,
    NavComponent
  ]
})
export class SharedModule { }
