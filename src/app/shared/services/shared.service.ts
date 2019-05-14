import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import { AngularFirestore } from '@angular/fire/firestore';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  perfectScrollbar: PerfectScrollbarDirective;
  topBarListener: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private afs: AngularFirestore) { 
  }

  get getExchangeRate() {
    return this.afs.doc("/exchange/rate").valueChanges();
  }

  get getSliderImageList() {
    return this.afs.collection("/sliderImage").valueChanges();
  }

  saveUserDetails(uid: string, data: {}) {
    this.afs.collection("/users").doc(uid).set(data);
  }

  requestSell(uid: string, data: {}) {
    this.afs.collection("/sell").doc(uid).set(data);
  }

  requestBuy(uid: string, data: {}) {
    this.afs.collection("/buy").doc(uid).set(data);
  }

  sendMessage(data: {}) {
    return this.afs.collection("/messages").add(data);
  }

}
