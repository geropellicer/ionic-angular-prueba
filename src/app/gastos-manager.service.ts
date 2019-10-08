import { Injectable } from '@angular/core';
import { Gasto } from './gasto';

@Injectable({
  providedIn: 'root'
})
export class GastosManagerService {
  gastos: Gasto[] = [];

  constructor() { }

  agregarGasto(g: Gasto) {
    this.gastos.push(g);
  }
}
