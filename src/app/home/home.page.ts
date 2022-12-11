import { Component } from '@angular/core';
import {FoodItem} from './interfaces/foodItem';
import {ModalController} from '@ionic/angular';
import {AddFoodModalPage} from '../addFoodModal/addFoodModal.page';
import {DatePipe} from '@angular/common';
import {TestModalPage} from "../test-modal/test-modal.page";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  modalDataResponse: any;
  foodItemList: FoodItem[] = [];
  showList = true;
  showPopup = false;

  constructor(public modalCtrl: ModalController) {}

  sortList(){
    this.foodItemList.sort((a,b) => { return (a.expirationDate.getTime()) - (b.expirationDate.getTime());});
    }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: AddFoodModalPage,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.foodItemList.push(data);
      this.sortList();
    }
  }

  deleteFoodItem(foodItem: FoodItem) {
    const index = this.foodItemList.indexOf(foodItem);
    if (index === -1) {
      return;
    }
    this.foodItemList.splice(index, 1);
    this.sortList();
  }

  async openTestModal() {
    const openTestModal = await this.modalCtrl.create({
      component: TestModalPage,
    });
    openTestModal.present();

    const { data, role } = await openTestModal.onWillDismiss();
  }
}
