import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbonneePageRoutingModule } from './abonnee-routing.module';

import { AbonneePage } from './abonnee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbonneePageRoutingModule
  ],
  declarations: [AbonneePage]
})
export class AbonneePageModule {}
