import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children:[
      {
        path: 'accueil',
        loadChildren: () => import('../accueil/accueil.module').then( m => m.AccueilPageModule)
      },
      {
        path: 'structure',
        loadChildren: () => import('../structure/structure.module').then( m => m.StructurePageModule)
      },
      {
        path: 'emploi',
        loadChildren: () => import('../emploi/emploi.module').then( m => m.EmploiPageModule)
      },
      {
        path: 'projet',
        loadChildren: () => import('../projet/projet.module').then( m => m.ProjetPageModule)
      },
      {
        path: 'structurehome',
        loadChildren: () => import('../structurehome/structurehome.module').then( m => m.StructurehomePageModule)
      },
      {
        path:'',
        redirectTo:'/tabs/accueil',
        pathMatch:'full'
      }
    ]
  },
  {
    path:'',
    redirectTo:'/tabs/accueil',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
