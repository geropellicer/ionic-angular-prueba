import { Component, OnInit } from '@angular/core';
import { GastosManagerService } from '../gastos-manager.service';

@Component({
  selector: 'app-bottombar',
  templateUrl: './bottombar.component.html',
  styleUrls: ['./bottombar.component.scss'],
})
export class BottombarComponent implements OnInit {

  cantGastos: number;

  constructor(private gService: GastosManagerService) { }

  ngOnInit() {
    this.getCantGastos();
  }

  getCantGastos(): void {
    this.cantGastos = this.gService.getGastos().length;
  }
}
