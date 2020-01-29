import { Component, OnInit } from '@angular/core';
import { MimodeloService } from 'src/app/services/mimodelo.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Mimodelo } from 'src/app/modelo/mimodelo';

@Component({
  selector: 'app-crearuser',
  templateUrl: './crearuser.component.html',
  styleUrls: ['./crearuser.component.scss']
})
export class CrearuserComponent implements OnInit {

  private formuser: FormGroup;
  public usuarios: Mimodelo;

  constructor(private formBuilder: FormBuilder, private mimodeloService: MimodeloService) {
    this.formuser = formBuilder.group({
      nombre: [],
      imagen: []
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

}
