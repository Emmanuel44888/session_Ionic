import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DecoratorsPageRoutingModule } from './decorators-routing.module';

import { DecoratorsPage } from './decorators.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DecoratorsPageRoutingModule
  ],
  declarations: [DecoratorsPage]
})
export class DecoratorsPageModule {}
