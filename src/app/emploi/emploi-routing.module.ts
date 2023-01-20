import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmploiPage } from './emploi.page';

const routes: Routes = [
  {
    path: 'tabs/emploi',
    component: EmploiPage,
    children:[
      {
        path: 'modifiercompte',
        loadChildren: () => import('../modifiercompte/modifiercompte.module').then( m => m.ModifiercomptePageModule)
      },
      {
        path: 'modifierprofil',
        loadChildren: () => import('../modifierprofil/modifierprofil.module').then( m => m.ModifierprofilPageModule)
      },
      {
        path:'',
        redirectTo:'tabs/emploi',
        pathMatch:'full'
      }
    ]
  },
  {
    path:'',
    redirectTo:'tabs/emploi',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmploiPageRoutingModule {}
