import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { SharedService } from 'src/app/shared/services/shared.service';
import { Subscription } from 'rxjs';

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

  constructor(private fb: FormBuilder, private service: SharedService) {}

  ngOnInit() {
    this.firstFormGroup = this.fb.group({
      from: ["bkash",[Validators.required]],
      to: ["skrill",[Validators.required]],
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
