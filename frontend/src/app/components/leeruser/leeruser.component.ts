import { Component, OnInit } from '@angular/core';
import { MimodeloService } from 'src/app/services/mimodelo.service';
import { Mimodelo } from 'src/app/modelo/mimodelo';

@Component({
  selector: 'app-leeruser',
  templateUrl: './leeruser.component.html',
  styleUrls: ['./leeruser.component.scss']
})
export class LeeruserComponent implements OnInit {

  public usuarios: Mimodelo;
  constructor(private mimodeloService: MimodeloService) { }

  ngOnInit() {
    this.mimodeloService.getUsuarios().subscribe(
      res => {
        console.log(res);
        this.usuarios = res;
      },
      err => {
        console.log(err);
      }
    );
  }
}
