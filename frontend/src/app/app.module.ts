import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BarranavegacionComponent } from './components/barranavegacion/barranavegacion.component';
import { CrearuserComponent } from './components/crearuser/crearuser.component';
import { LeeruserComponent } from './components/leeruser/leeruser.component';
import { LoginComponent } from './components/login/login.component';
import { ParteprivadaComponent } from './components/parteprivada/parteprivada.component';
import { GLoginUserGuard } from './services/glogin-user.guard';
import { CompruebatokenService } from './services/compruebatoken.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BarranavegacionComponent,
    CrearuserComponent,
    LeeruserComponent,
    LoginComponent,
    ParteprivadaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    GLoginUserGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CompruebatokenService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
