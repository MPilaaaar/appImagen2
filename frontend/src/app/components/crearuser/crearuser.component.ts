import { Component, OnInit } from '@angular/core';
import { MimodeloService } from 'src/app/services/mimodelo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Mimodelo } from 'src/app/modelo/mimodelo';

@Component({
  selector: 'app-crearuser',
  templateUrl: './crearuser.component.html',
  styleUrls: ['./crearuser.component.scss']
})
export class CrearuserComponent implements OnInit {

  public formuser: FormGroup;
  public usuarios: Mimodelo;

  private patronemail = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$';

  constructor(private formBuilder: FormBuilder, private mimodeloService: MimodeloService) {
    this.formuser = formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(6)]],
      imagen: ['', [Validators.required, Validators.pattern(this.patronemail)]]
    });
   }

  ngOnInit() {}

  submit() {
    this.mimodeloService.saveUsuario(this.formuser.value).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
  get nombre() {
    return this.formuser.get('nombre');
  }

  get imagen() {
    return this.formuser.get('imagen');
  }
}
