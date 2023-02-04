import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreerprofilePage } from './creerprofile.page';

const routes: Routes = [
  {
    path: '',
    component: CreerprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreerprofilePageRoutingModule {}
