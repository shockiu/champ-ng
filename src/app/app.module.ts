import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
=======
import { SharedModule } from './shared/shared.module';
>>>>>>> 6e0dea2533ad489c6c265ae5db52453d2746e415
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { MainComponent } from './layout/main/main.component';
import { AuthComponent } from './layout/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AuthComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
