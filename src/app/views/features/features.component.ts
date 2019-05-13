import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  cardList = [
    {
      icon: "restore",
      text: "Money Back Guarantee"
    },
    {
      icon: "call",
      text: "01992057252"
    },
    {
      icon: "security",
      text: "Highly Secured"
    },
    {
      icon: "chat",
      text: "Live Chat"
    },

  ]
  constructor() { }

  ngOnInit() {
  }

}
