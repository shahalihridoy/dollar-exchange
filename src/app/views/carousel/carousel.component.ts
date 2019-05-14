import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  sliderList: any = null;

  constructor(private service: SharedService) { }

  ngOnInit() {
    this.sliderList = this.service.getSliderImageList;
  }

}
