import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StructurehomePage } from './structurehome.page';

const routes: Routes = [
  {
    path: '',
    component: StructurehomePage
  },
  {
    path: 'avis-details',
    loadChildren: () => import('../avis-details/avis-details.module').then( m => m.AvisDetailsPageModule)
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
