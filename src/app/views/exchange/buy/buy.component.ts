import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { SharedService } from 'src/app/shared/services/shared.service';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  exchangeRate: any;
  sub: Subscription;

  paymentMethodList = ["brac bank","dbbl","rocket","bkash"];
  receivingMethodList = ["skrill","neteller","perfect money","payoneer","web money","avcash"];

  constructor(private authService: AuthService,private fb: FormBuilder, private service: SharedService) {}

  ngOnInit() {
    this.firstFormGroup = this.fb.group({
      from: [this.paymentMethodList[0],[Validators.required]],
      to: [this.receivingMethodList[0],[Validators.required]],
      amount: ["",[Validators.required]],
    });

    this.secondFormGroup = this.fb.group({
      contact: ["",[Validators.required]],
      transactionID: ["",[Validators.required]],
      sender: ["",[Validators.required]],
      email: ["",[Validators.required,Validators.email]],
    });
    
    this.exchangeRate = this.service.getExchangeRate;
  }

  requestTransaction() {
    if(this.secondFormGroup.valid) {
      let data = {...this.firstFormGroup.value,...this.secondFormGroup.value,currency: "Taka",date: new Date().toDateString(),status: "processing"};
      let uid = this.authService.userID;
      this.service.requestTransaction(uid,data);
    }
  }

  get From() {
    let fromValue = this.firstFormGroup.get("from").value as string;
    return fromValue[0].toUpperCase()+fromValue.substr(1);
  }
  get To() {
    let toValue = this.firstFormGroup.get("to").value as string;
    return toValue[0].toUpperCase()+toValue.substr(1);
  }
  
  get Amount() {
    return this.firstFormGroup.get("amount").value;
  }
}
