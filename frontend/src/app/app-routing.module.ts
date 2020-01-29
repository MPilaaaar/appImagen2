import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LeeruserComponent } from './components/leeruser/leeruser.component';
import { CrearuserComponent } from './components/crearuser/crearuser.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'crearuser',
    component: CrearuserComponent
  },
  {
    path: 'leeruser',
    component: LeeruserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
