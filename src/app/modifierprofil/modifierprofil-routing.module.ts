import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifierprofilPage } from './modifierprofil.page';

const routes: Routes = [
  {
    path: '',
    component: ModifierprofilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifierprofilPageRoutingModule {}
