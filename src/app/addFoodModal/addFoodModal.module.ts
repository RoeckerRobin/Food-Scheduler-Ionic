import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalPageRoutingModule } from './addFoodModal-routing.module';

import { AddFoodModalPage } from './addFoodModal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ModalPageRoutingModule
  ],
  declarations: [AddFoodModalPage]
})
export class ModalPageModule {}
