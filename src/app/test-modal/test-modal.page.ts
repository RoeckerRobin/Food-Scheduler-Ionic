import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-modal-example',
  templateUrl: 'test-modal.page.html',
})

export class TestModalPage implements OnInit {
  form: FormGroup;
  buttonName = 'start';
  buttonColor = 'success';
  numberOfObjects = 0;
  numberOfSeconds = 0;
  runTest = false;

  constructor(private modalCtrl: ModalController, public formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      numberOfObjectsForm: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.min(1)]],
      numberOfSecondsForm: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.min(1)]]
    });
  }

  close() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  startTest() {
    this.runTest = true;
    const list = [];
    for (let i = 0; i < this.numberOfSeconds; i++) {
      for (let j = 0; j < this.numberOfObjects; j++) {
        list.push(new Object());
      }
      const start = new Date().getTime();
      let end = start;
      while (end < start + 1000) {
        end = new Date().getTime();
      }
    }
    this.runTest = false;
  }
}
