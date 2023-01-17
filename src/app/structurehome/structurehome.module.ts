import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StructurehomePageRoutingModule } from './structurehome-routing.module';

import { StructurehomePage } from './structurehome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StructurehomePageRoutingModule
  ],
  declarations: [StructurehomePage]
})
export class StructurehomePageModule {}
