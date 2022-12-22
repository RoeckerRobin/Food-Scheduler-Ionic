import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {FoodItem} from '../home/interfaces/foodItem';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-addFoodModal',
  templateUrl: './addFoodModal.page.html',
  styleUrls: ['./addFoodModal.page.scss'],
})
export class AddFoodModalPage implements OnInit {
  form: FormGroup;
  submitted = false;
  inputName = '';
  inputDate = '';

  constructor(private modalCtrl: ModalController, public formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      date: ['', [Validators.required]]
    });
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(new FoodItem(this.inputName, new Date(Date.parse(this.inputDate))), 'confirm');
  }
}
