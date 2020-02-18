import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Mimodelo } from 'src/app/modelo/mimodelo';
import { MimodeloService } from 'src/app/services/mimodelo.service';
import * as CryptoJS from 'crypto-js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formlogin: FormGroup;
  public usuarios: Mimodelo;

  constructor( private router: Router, private formBuilder: FormBuilder, private mimodeloService: MimodeloService) {
    this.formlogin = formBuilder.group({
      nombre: [''],
      imagen: ['']
    });
   }

  ngOnInit() {}

  submit() {
    // console.log('La contraseña criptada es: ' + CryptoJS.SHA512('string a encriptar').toString());
    // console.log(this.formlogin.value);
    this.mimodeloService.getLogin(this.formlogin.value).subscribe(
      res => {
        // console.log(res);
        localStorage.setItem('token', res);
        this.router.navigate(['/home']);
      },
      err => {
        console.log(err);
      }
    );
  }
  get nombre() {
    return this.formlogin.get('nombre');
  }

  get imagen() {
    return this.formlogin.get('imagen');
  }
}
