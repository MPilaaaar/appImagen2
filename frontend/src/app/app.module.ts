import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BarranavegacionComponent } from './components/barranavegacion/barranavegacion.component';
import { CrearuserComponent } from './components/crearuser/crearuser.component';
import { LeeruserComponent } from './components/leeruser/leeruser.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BarranavegacionComponent,
    CrearuserComponent,
    LeeruserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
