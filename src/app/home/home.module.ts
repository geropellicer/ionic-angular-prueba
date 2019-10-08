import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { TarjetaInputComponent } from '../tarjeta-input/tarjeta-input.component';
import { TarjetaDisplayComponent } from '../tarjeta-display/tarjeta-display.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, TarjetaInputComponent, TarjetaDisplayComponent]
})
export class HomePageModule {}
