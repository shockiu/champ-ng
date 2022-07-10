import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PrimeNgModule } from './primeNgModules';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    CardComponent
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
    CardComponent,
    RouterModule
  ]
})
export class SharedModule { }
