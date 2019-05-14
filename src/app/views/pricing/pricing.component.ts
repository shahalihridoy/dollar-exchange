import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  exchangeRate = {};
  buyingFeeList = [
    {
      type: "Skrill (1-30)",
      bkash: "102+transaction fee",
      rocket: "104+transaction fee"
    },
    {
      type: "Skrill (31-100)",
      bkash: "102",
      rocket: "104"
    },
    {
      type: "Neteller (1-30)",
      bkash: "102+transaction fee",
      rocket: "104+transaction fee"
    },
    {
      type: "Neteller (31-100)",
      bkash: "102",
      rocket: "104"
    },
  ];

  constructor(private service: SharedService) { }

  ngOnInit() {
    this.exchangeRate = this.service.getExchangeRate
  }

}
