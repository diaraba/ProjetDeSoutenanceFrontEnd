import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnnonceDetailsaPage } from './annonce-detailsa.page';

const routes: Routes = [
  {
    path: 'tabs/annonce-detailsa',
    component: AnnonceDetailsaPage,
    children:[
      {
        path:'',
        redirectTo:'tabs/annonce-detailsa',
        pathMatch:'full'
      }
    ]
  },
  {
    path:'',
    redirectTo:'tabs/annonce-detailsa',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnnonceDetailsaPageRoutingModule {}
