import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreerprofilePageRoutingModule } from './creerprofile-routing.module';

import { CreerprofilePage } from './creerprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreerprofilePageRoutingModule
  ],
  declarations: [CreerprofilePage]
})
export class CreerprofilePageModule {}
