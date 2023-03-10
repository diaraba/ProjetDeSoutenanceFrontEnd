import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePage } from './profile.page';

const routes: Routes = [
  {
    path: 'tabs/profile',
    component: ProfilePage,
  },
  {
    path:'',
    redirectTo:'tabs/profile',
    pathMatch:'full'
  },

  {
    path: 'modifierprofil',
    loadChildren: () => import('../modifierprofil/modifierprofil.module').then( m => m.ModifierprofilPageModule)
  },
  //   children:[
  //     {
  //       path:'',
  //       redirectTo:'tabs/profile',
  //       pathMatch:'full'
  //     }
  //   ]
  // },
  // {
  //   path:'',
  //   redirectTo:'tabs/profile',
  //   pathMatch:'full'
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}
