import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifiercomptePageRoutingModule } from './modifiercompte-routing.module';

import { ModifiercomptePage } from './modifiercompte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifiercomptePageRoutingModule
  ],
  declarations: [ModifiercomptePage]
})
export class ModifiercomptePageModule {}
