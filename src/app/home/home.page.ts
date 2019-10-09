import { Component, OnInit } from '@angular/core';
import { Gasto } from '../gasto';
import { GastosManagerService  } from '../gastos-manager.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  gastos: Gasto[];

  constructor(private gService: GastosManagerService) {}

  ngOnInit() {
    this.getGastos();
  }

  getGastos(): void {
    this.gastos = this.gService.getGastos();
  }
}
