import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LampadaPage } from './lampada.page';

const routes: Routes = [
  {
    path: '',
    component: LampadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LampadaPageRoutingModule {}
