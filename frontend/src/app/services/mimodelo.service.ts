import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mimodelo } from '../modelo/mimodelo';

@Injectable({
  providedIn: 'root'
})
export class MimodeloService {

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<any> {
    return this.http.get('http://localhost:3000/usuarios');
  }

  getUsuario() {

  }

  saveUsuario(usuario: Mimodelo): Observable<any> {
    console.log(usuario);
    return this.http.post('http://localhost:3000/usuarios', usuario);
  }

  deleteUsuario() {

  }

  updateUsuario() {

  }
}
