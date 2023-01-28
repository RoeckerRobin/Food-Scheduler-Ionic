import {Component} from '@angular/core';
import {FoodItem} from './interfaces/foodItem';
import {ModalController} from '@ionic/angular';
import {AddFoodModalPage} from '../addFoodModal/addFoodModal.page';
import {TestModalPage} from '../test-modal/test-modal.page';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  foodItemList: FoodItem[] = [];

  constructor(public modalCtrl: ModalController, private dataService: DataService) {
    this.loadData();
  }

  sortList() {
    this.foodItemList.sort((a, b) => {
      return (a.expirationDate.getTime()) - (b.expirationDate.getTime());
    });
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: AddFoodModalPage,
    });
    modal.present();

    const {data, role} = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.foodItemList.push(data);
      this.sortList();
      await this.dataService.setData(this.foodItemList);
    }
  }

  async loadData() {
    const loadedFoodItemList = await this.dataService.getData();
    if (loadedFoodItemList.length !== 0){
      this.foodItemList = loadedFoodItemList;
    }
  }

  async deleteFoodItem(foodItem: FoodItem) {
    const index = this.foodItemList.indexOf(foodItem);
    if (index === -1) {
      return;
    }
    this.foodItemList.splice(index, 1);
    this.sortList();
    await this.dataService.setData(this.foodItemList);
  }

  async openTestModal() {
    const openTestModal = await this.modalCtrl.create({
      component: TestModalPage,
    });
    openTestModal.present();

    const {data, role} = await openTestModal.onWillDismiss();
  }
}
