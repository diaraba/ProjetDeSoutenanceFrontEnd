import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccueilstructurePageRoutingModule } from './accueilstructure-routing.module';

import { AccueilstructurePage } from './accueilstructure.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccueilstructurePageRoutingModule
  ],
  declarations: [AccueilstructurePage]
})
export class AccueilstructurePageModule {}
