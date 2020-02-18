import { Component, OnInit } from '@angular/core';
import { MimodeloService } from '../../services/mimodelo.service';
@Component({
  selector: 'app-barranavegacion',
  templateUrl: './barranavegacion.component.html',
  styleUrls: ['./barranavegacion.component.scss']
})
export class BarranavegacionComponent implements OnInit {

  constructor(public mimodeloservice: MimodeloService) { }

  ngOnInit() {
  }

}
