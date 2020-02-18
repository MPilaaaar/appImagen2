import { Injectable } from '@angular/core';
import { MimodeloService } from './mimodelo.service';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class GLoginUserGuard implements CanActivate {
  constructor(private miservicio: MimodeloService, private router: Router) {
   

  }

  canActivate(): boolean {
    if (this.miservicio.logIn()) {
      
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
