import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifiercomptePage } from './modifiercompte.page';

const routes: Routes = [
  {
    path: '',
    component: ModifiercomptePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifiercomptePageRoutingModule {}
