import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotificationComponent } from './notification/notification.component';

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
    path: 'structurehome/:id',
    loadChildren: () => import('./structurehome/structurehome.module').then( m => m.StructurehomePageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'modifiercompte',
    loadChildren: () => import('./modifiercompte/modifiercompte.module').then( m => m.ModifiercomptePageModule)
  },
  {
    path: 'modifierprofil',
    loadChildren: () => import('./modifierprofil/modifierprofil.module').then( m => m.ModifierprofilPageModule)
  },
  {
    path: 'notification', component: NotificationComponent
    
  },
  {
    path: 'profile/:id',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'abonnement',
    loadChildren: () => import('./abonnement/abonnement.module').then( m => m.AbonnementPageModule)
  },
  {
    path: 'abonnee',
    loadChildren: () => import('./abonnee/abonnee.module').then( m => m.AbonneePageModule)
  },
  {
    path: 'annonce-detailsa/:id',
    loadChildren: () => import('./annonce-detailsa/annonce-detailsa.module').then( m => m.AnnonceDetailsaPageModule)
  },
  {
    path: 'avis-details/:id',
    loadChildren: () => import('./avis-details/avis-details.module').then( m => m.AvisDetailsPageModule)
  },
  {
    path: 'creerprofile',
    loadChildren: () => import('./creerprofile/creerprofile.module').then( m => m.CreerprofilePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
