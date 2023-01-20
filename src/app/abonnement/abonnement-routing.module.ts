import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbonnementPage } from './abonnement.page';

const routes: Routes = [
  {
    path: 'tabs/abonnement',
    component: AbonnementPage,
    children:[
      
      {
        path:'',
        redirectTo:'tabs/abonnement',
        pathMatch:'full'
      }
    ]
  },

  {
    path:'',
    redirectTo:'tabs/abonnement',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbonnementPageRoutingModule {}
