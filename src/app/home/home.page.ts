import { Component } from '@angular/core';
import { Gasto } from '../gasto';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  gastos: Gasto[] = [];

  constructor() {}

}
