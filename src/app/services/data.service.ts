import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage-angular';

const STORAGE_KEY = 'foodList';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private storage: Storage) {
    this.init();
  }

  init() {
    this.storage.create();
  }

  getData() {
    return this.storage.get(STORAGE_KEY) || [];
  }

  async setData(storedData) {
    return this.storage.set(STORAGE_KEY, storedData);
  }
}
