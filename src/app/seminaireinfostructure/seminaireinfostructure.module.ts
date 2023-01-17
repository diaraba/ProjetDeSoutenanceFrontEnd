import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeminaireinfostructurePageRoutingModule } from './seminaireinfostructure-routing.module';

import { SeminaireinfostructurePage } from './seminaireinfostructure.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeminaireinfostructurePageRoutingModule
  ],
  declarations: [SeminaireinfostructurePage]
})
export class SeminaireinfostructurePageModule {}
