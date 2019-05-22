import { Component, OnInit, ViewChild, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { Subscription } from 'rxjs';
import { SwiperDirective } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CarouselComponent implements OnInit, OnDestroy {

  sliderList: any[] = [];
  sub: Subscription;

  @ViewChild(SwiperDirective) swiper: SwiperDirective;

  constructor(private cdr: ChangeDetectorRef, private service: SharedService) { }

  ngOnInit() {
    if(!this.sub) {
      this.sub = this.service.getSliderImageList.subscribe(slides => {
        this.sliderList = [...slides];
        this.swiper.update();
        this.cdr.markForCheck();
      });
    }
    else this.sub.unsubscribe();
  }

  ngOnDestroy() {
    if(this.sub) 
    this.sub.unsubscribe();
  }

}
