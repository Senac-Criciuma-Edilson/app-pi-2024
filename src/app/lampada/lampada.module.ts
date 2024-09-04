import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LampadaPageRoutingModule } from './lampada-routing.module';

import { LampadaPage } from './lampada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LampadaPageRoutingModule
  ],
  declarations: [LampadaPage]
})
export class LampadaPageModule {}
