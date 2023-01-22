import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnnonceDetailsaPageRoutingModule } from './annonce-detailsa-routing.module';

import { AnnonceDetailsaPage } from './annonce-detailsa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnnonceDetailsaPageRoutingModule
  ],
  declarations: [AnnonceDetailsaPage]
})
export class AnnonceDetailsaPageModule {}
