import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StructurehomePage } from './structurehome.page';

const routes: Routes = [
  {
    path: '',
    component: StructurehomePage
  },
  {
    path: 'avis-details/:id',
    loadChildren: () => import('../avis-details/avis-details.module').then( m => m.AvisDetailsPageModule)
  },
  {
    path: 'annonce-detailsa/:id',
    loadChildren: () => import('../annonce-detailsa/annonce-detailsa.module').then( m => m.AnnonceDetailsaPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StructurehomePageRoutingModule {}
