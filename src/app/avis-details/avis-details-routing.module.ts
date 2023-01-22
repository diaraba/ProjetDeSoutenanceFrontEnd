import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvisDetailsPage } from './avis-details.page';

const routes: Routes = [
  {
    path: 'tabs/avis-details',
    component: AvisDetailsPage,
    children:[
      {
        path:'',
        redirectTo:'tabs/avis-details',
        pathMatch:'full'
      }
    ]
  },
  {
    path:'',
    redirectTo:'tabs/avis-details',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvisDetailsPageRoutingModule {}
