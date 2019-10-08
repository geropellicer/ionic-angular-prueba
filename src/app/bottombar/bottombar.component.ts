import { Component, OnInit } from '@angular/core';
import { Gasto } from '../gasto';
import { GastosManagerService } from '../gastos-manager.service';

@Component({
  selector: 'app-bottombar',
  templateUrl: './bottombar.component.html',
  styleUrls: ['./bottombar.component.scss'],
})
export class BottombarComponent implements OnInit {

  gastos: Gasto[] = [];

  constructor(private gService: GastosManagerService) { }

  ngOnInit() {
    this.gastos = this.gService.gastos;
  }

}
