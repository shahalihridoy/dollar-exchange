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

  get transactionList() {
    return this.afs.collection("/transaction",ref => ref.orderBy("date",'desc').limit(10)).valueChanges();
  }

  saveUserDetails(uid: string, data: {}) {
    this.afs.collection("/users").doc(uid).set(data);
  }

  requestTransaction(uid: string, data: {}) {
    this.afs.collection("/transaction").doc(uid).set(data);
  }

  sendMessage(data: {}) {
    return this.afs.collection("/messages").add(data);
  }

}
