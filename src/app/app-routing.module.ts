import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  // {
  //   path: '',
  //   redirectTo: 'tabs',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'accueil',
    loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'structure',
    loadChildren: () => import('./structure/structure.module').then( m => m.StructurePageModule)
  },
  {
    path: 'emploi',
    loadChildren: () => import('./emploi/emploi.module').then( m => m.EmploiPageModule)
  },
  {
    path: 'projet',
    loadChildren: () => import('./projet/projet.module').then( m => m.ProjetPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'accueilstructure',
    loadChildren: () => import('./accueilstructure/accueilstructure.module').then( m => m.AccueilstructurePageModule)
  },
  {
    path: 'appuifinrecstructure',
    loadChildren: () => import('./appuifinrecstructure/appuifinrecstructure.module').then( m => m.AppuifinrecstructurePageModule)
  },
  {
    path: 'seminaireinfostructure',
    loadChildren: () => import('./seminaireinfostructure/seminaireinfostructure.module').then( m => m.SeminaireinfostructurePageModule)
  },
  {
    path: 'structurehome',
    loadChildren: () => import('./structurehome/structurehome.module').then( m => m.StructurehomePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
