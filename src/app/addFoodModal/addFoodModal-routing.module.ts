import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AddFoodModalPage} from './addFoodModal.page';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: AddFoodModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [RouterModule],
})
export class ModalPageRoutingModule {
}
