import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  cardList = [
    {
      icon: "account_balance",
      text: "Buy"
    },
    {
      icon: "payment",
      text: "Sell"
    },
    {
      icon: "swap_horiz",
      text: "Exchange"
    },
    {
      icon: "call",
      text: "01992057252"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
