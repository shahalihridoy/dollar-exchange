import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { Subscription } from 'rxjs';
import { SwiperDirective } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})

export class CarouselComponent implements OnInit, OnDestroy {

  sliderList: any = [
    {
      imageUrl: "./assets/images/1.jpg"
    },
    {
      imageUrl: "./assets/images/2.jpg"
    },
    {
      imageUrl: "./assets/images/3.jpg"
    },
  ];
  @ViewChild(SwiperDirective) swiper: SwiperDirective;
  sub: Subscription;
  constructor(private service: SharedService) { }

  ngOnInit() {
    if(!this.sub) {
      this.sub = this.service.getSliderImageList.subscribe(slides => {
        this.sliderList = [...slides];
        this.swiper.update();
      });
    }
    else this.sub.unsubscribe();
  }

  ngOnDestroy() {
    if(this.sub) 
    this.sub.unsubscribe();
  }

}
