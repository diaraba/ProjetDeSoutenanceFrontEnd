import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StructurePage } from './structure.page';

const routes: Routes = [
  {
    path: 'tabs/structure',
    component: StructurePage,
    children:[
      {
        path: 'accueilstructure',
        loadChildren: () => import('../accueilstructure/accueilstructure.module').then( m => m.AccueilstructurePageModule)
      },
      {
        path: 'appuifinrecstructure',
        loadChildren: () => import('../appuifinrecstructure/appuifinrecstructure.module').then( m => m.AppuifinrecstructurePageModule)
      },
      {
        path: 'seminaireinfostructure',
        loadChildren: () => import('../seminaireinfostructure/seminaireinfostructure.module').then( m => m.SeminaireinfostructurePageModule)
      },
      {
        path:'',
        redirectTo:'tabs/structure/accueilstructure',
        pathMatch:'full'
      }
    ]
  },
  {
    path:'',
    redirectTo:'tabs/structure/accueilstructure',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StructurePageRoutingModule {}
