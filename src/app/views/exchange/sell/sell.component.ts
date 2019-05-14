import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { SharedService } from 'src/app/shared/services/shared.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss']
})
export class SellComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  exchangeRate: any;

  constructor(private fb: FormBuilder, private service: SharedService, private authService: AuthService) {}

  ngOnInit() {
    this.firstFormGroup = this.fb.group({
      from: ["skrill",[Validators.required]],
      to: ["bkash",[Validators.required]],
      amount: ["",[Validators.required]],
    });

    this.secondFormGroup = this.fb.group({
      contact: ["",[Validators.required]],
      sender: ["",[Validators.required]],
      email: ["",[Validators.required,Validators.email]],
    });

    this.exchangeRate = this.service.getExchangeRate;
  }

  requestSell() {
    if(this.secondFormGroup.valid) {
      let data = {...this.firstFormGroup.value,...this.secondFormGroup.value};
      let uid = this.authService.userID;
      this.service.requestSell(uid,data);
    }
  }

  get From() {
    let fromValue = this.firstFormGroup.get("from").value as string;
    if(fromValue) 
    return fromValue[0].toUpperCase()+fromValue.substr(1);
  }
  get To() {
    let toValue = this.firstFormGroup.get("to").value as string;
    if(toValue)
    return toValue[0].toUpperCase()+toValue.substr(1);
  }
  get Amount() {
    return this.firstFormGroup.get("amount").value;
  }
}
