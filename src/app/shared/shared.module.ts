import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PrimeNgModule } from './primeNgModules';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    RouterModule
  ],
  exports: [
    PrimeNgModule,
    NavbarComponent,
    FooterComponent,
    RouterModule
  ]
})
export class SharedModule { }
