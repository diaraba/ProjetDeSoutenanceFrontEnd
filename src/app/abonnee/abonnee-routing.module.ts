import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbonneePage } from './abonnee.page';

const routes: Routes = [
  {
    path: 'tabs/abonnee',
    component: AbonneePage,
    children:[
      
      {
        path:'',
        redirectTo:'tabs/abonnee',
        pathMatch:'full'
      }
    ]
  },
  
  {
    path:'',
    redirectTo:'tabs/abonnee',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbonneePageRoutingModule {}
