import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {TestModalPageRoutingModule} from './test-modal-routing.module';
import {TestModalPage} from './test-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TestModalPageRoutingModule
  ],
  declarations: [TestModalPage]
})

export class TestModalPageModule {
}
