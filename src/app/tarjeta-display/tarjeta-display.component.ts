import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta-display',
  templateUrl: './tarjeta-display.component.html',
  styleUrls: ['./tarjeta-display.component.scss'],
})
export class TarjetaDisplayComponent implements OnInit {

  @Input() id: number;
  @Input() descripcion: string;
  @Input() precio: number;

  constructor() { }

  ngOnInit() {}

}
