import { Injectable } from '@angular/core';
import { Gasto } from './gasto';
import { GASTOS } from './mock-gastos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GastosManagerService {
  gastos: Gasto[] = GASTOS;

  constructor() { }

  agregarGasto(texto: string, precio: number) {
    const g = new Gasto();
    g.id = this.gastos.length + 1;
    g.gasto = texto;
    g.precio = precio;
    this.gastos.push(g);
  }

  getGastos(): Gasto[] {
    return this.gastos;
  }
}
