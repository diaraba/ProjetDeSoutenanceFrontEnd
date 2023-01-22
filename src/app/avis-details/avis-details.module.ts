import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvisDetailsPageRoutingModule } from './avis-details-routing.module';

import { AvisDetailsPage } from './avis-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvisDetailsPageRoutingModule
  ],
  declarations: [AvisDetailsPage]
})
export class AvisDetailsPageModule {}
