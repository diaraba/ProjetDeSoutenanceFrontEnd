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
        path: 'structurehome/:id',
        loadChildren: () => import('../structurehome/structurehome.module').then( m => m.StructurehomePageModule)
      },
      {
        path: 'modifiercompte',
        loadChildren: () => import('../modifiercompte/modifiercompte.module').then( m => m.ModifiercomptePageModule)
      },
      {
        path: 'modifierprofil',
        loadChildren: () => import('../modifierprofil/modifierprofil.module').then( m => m.ModifierprofilPageModule)
      },
      {
        path: 'modifierprofil',
        loadChildren: () => import('../modifierprofil/modifierprofil.module').then( m => m.ModifierprofilPageModule)
      },
      {
        path: 'creerprofile',
        loadChildren: () => import('../creerprofile/creerprofile.module').then( m => m.CreerprofilePageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'abonnement',
        loadChildren: () => import('../abonnement/abonnement.module').then( m => m.AbonnementPageModule)
      },
      {
        path: 'abonnee',
        loadChildren: () => import('../abonnee/abonnee.module').then( m => m.AbonneePageModule)
      },
      {
        path: 'annonce-detailsa',
        loadChildren: () => import('../annonce-detailsa/annonce-detailsa.module').then( m => m.AnnonceDetailsaPageModule)
      },
      {
        path: 'avis-details',
        loadChildren: () => import('../avis-details/avis-details.module').then( m => m.AvisDetailsPageModule)
      },
      {
        path: 'demande',
        loadChildren: () => import('../demande/demande.module').then( m => m.DemandePageModule)
      },
      {
        path: 'changermotdepasse',
        loadChildren: () => import('../changermotdepasse/changermotdepasse.module').then( m => m.ChangermotdepassePageModule)
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
