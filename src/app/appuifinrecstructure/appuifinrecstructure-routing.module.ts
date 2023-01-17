import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppuifinrecstructurePage } from './appuifinrecstructure.page';

const routes: Routes = [
  {
    path: '',
    component: AppuifinrecstructurePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppuifinrecstructurePageRoutingModule {}
