import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main.routes';
import { SharedModule } from '../../../shared/shared.module';

import { HomeComponent } from './home/home.component';
import { PlayersComponent } from './players/players.component';



@NgModule({
  declarations: [
    HomeComponent, 
    PlayersComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ]
})
export class MainModule { }
