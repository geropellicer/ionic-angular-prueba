import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GastosManagerService } from '../gastos-manager.service';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-tarjeta-input',
  templateUrl: './tarjeta-input.component.html',
  styleUrls: ['./tarjeta-input.component.scss'],
})
export class TarjetaInputComponent implements OnInit {

  newGasto = {
    texto: '',
    precio: 0,
  };

  constructor(private gService: GastosManagerService) {}

  ngOnInit() {}

  addGasto() {
    console.log('gasto add');
    this.gService.agregarGasto(this.newGasto.texto, this.newGasto.precio);
    console.log(this.gService.getGastos().length);
    this.clearForm();
  }

  clearForm() {
    this.newGasto.texto = '';
    this.newGasto.precio = 0;
  }

}
