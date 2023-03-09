import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangermotdepassePageRoutingModule } from './changermotdepasse-routing.module';

import { ChangermotdepassePage } from './changermotdepasse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangermotdepassePageRoutingModule
  ],
  declarations: [ChangermotdepassePage]
})
export class ChangermotdepassePageModule {}
