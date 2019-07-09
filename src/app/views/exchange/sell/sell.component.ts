import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { SharedService } from "src/app/shared/services/shared.service";
import { AuthService } from "src/app/shared/services/auth.service";

@Component({
  selector: "app-sell",
  templateUrl: "./sell.component.html",
  styleUrls: ["./sell.component.scss"]
})
export class SellComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  exchangeRate: any;

  paymentMediumList;
  paymentMethodList = [
    "skrill",
    "neteller",
    "perfect money",
    "payoneer",
    "web money",
    "avcash"
  ];
  receivingMethodList = ["brac bank", "dbbl", "rocket", "bkash"];

  constructor(
    private fb: FormBuilder,
    private service: SharedService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.firstFormGroup = this.fb.group({
      from: [this.paymentMethodList[0], [Validators.required]],
      to: [this.receivingMethodList[0], [Validators.required]],
      amount: ["", [Validators.required]]
    });

    this.secondFormGroup = this.fb.group({
      contact: ["", [Validators.required]],
      sender: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]]
    });

    // replace space with underscore in methodlist for icon link web_money.png
    // this.paymentMethodList[0].replace(" ","_")
    this.exchangeRate = this.service.getExchangeRate;
    this.paymentMediumList = this.service.paymentMediumList;
  }

  requestTransaction() {
    if (this.secondFormGroup.valid) {
      let data = {
        ...this.firstFormGroup.value,
        ...this.secondFormGroup.value,
        date: new Date().toDateString(),
        status: "processing"
      };
      let uid = this.authService.userID;
      this.service.requestTransaction(uid, data);
    }
  }

  get From() {
    let fromValue = this.firstFormGroup.get("from").value as string;
    if (fromValue) return fromValue[0].toUpperCase() + fromValue.substr(1);
  }
  get To() {
    let toValue = this.firstFormGroup.get("to").value as string;
    if (toValue) return toValue[0].toUpperCase() + toValue.substr(1);
  }
  get Amount() {
    return this.firstFormGroup.get("amount").value;
  }
}
