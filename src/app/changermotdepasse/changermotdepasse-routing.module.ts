import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangermotdepassePage } from './changermotdepasse.page';

const routes: Routes = [
  {
    path: '',
    component: ChangermotdepassePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangermotdepassePageRoutingModule {}
