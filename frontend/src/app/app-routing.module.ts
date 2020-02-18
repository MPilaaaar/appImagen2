import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LeeruserComponent } from './components/leeruser/leeruser.component';
import { CrearuserComponent } from './components/crearuser/crearuser.component';
import { LoginComponent } from './components/login/login.component';
import { ParteprivadaComponent } from './components/parteprivada/parteprivada.component';
import { GLoginUserGuard } from './services/glogin-user.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'crearuser',
    component: CrearuserComponent,
    canActivate: [GLoginUserGuard]
  },
  {
    path: 'leeruser',
    component: LeeruserComponent,
    canActivate: [GLoginUserGuard]
  }
  // ,
  // {
  //   path: 'parteprivada',
  //   component: ParteprivadaComponent,
  //   canActivate: [GLoginUserGuard]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
