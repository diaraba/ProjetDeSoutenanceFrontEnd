import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeminaireinfostructurePage } from './seminaireinfostructure.page';

const routes: Routes = [
  {
    path: '',
    component: SeminaireinfostructurePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeminaireinfostructurePageRoutingModule {}
