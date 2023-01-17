import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueilstructurePage } from './accueilstructure.page';

const routes: Routes = [
  {
    path: '',
    component: AccueilstructurePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccueilstructurePageRoutingModule {}
