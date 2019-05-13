import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service: SharedService) {
  }

  ngOnInit() {
    this.service.perfectScrollbar.update();
    this.service.perfectScrollbar.scrollToTop();
  }
}
