import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppuifinrecstructurePageRoutingModule } from './appuifinrecstructure-routing.module';

import { AppuifinrecstructurePage } from './appuifinrecstructure.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppuifinrecstructurePageRoutingModule
  ],
  declarations: [AppuifinrecstructurePage]
})
export class AppuifinrecstructurePageModule {}
