import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'addFoodModal',
    loadChildren: () => import('./addFoodModal/addFoodModal.module').then(m => m.ModalPageModule)
  },
  {
    path: 'test-modal',
    loadChildren: () => import('./test-modal/test-modal.module').then(m => m.TestModalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}),
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
