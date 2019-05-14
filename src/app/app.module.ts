import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

import { SwiperModule, SwiperNavigationInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { MaterialModule } from './shared/modules/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SidenavComponent } from './views/sidenav/sidenav.component';
import { HeaderComponent } from './views/header/header.component';
import { HomeComponent } from './views/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ContactComponent } from './views/contact/contact.component';
import { PricingComponent } from './views/pricing/pricing.component';
import { FooterComponent } from './views/footer/footer.component';
import { CarouselComponent } from './views/carousel/carousel.component';
import { FeaturesComponent } from './views/features/features.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

const swiper_navigation: SwiperNavigationInterface = {
  nextEl: ".next",
  prevEl: ".prev"
};

const swiper_pagination: SwiperPaginationInterface = {
  el: ".swiper-pagination",
  type: "bullets",
  bulletActiveClass: "bullet-active",
  clickable: true
}

const swiper_config: SwiperConfigInterface = {
  autoplay: {
    delay: 6000,
    disableOnInteraction: false
  },
  initialSlide: 0,
  slidesPerView: 1,
  lazy: true,
  direction: "horizontal",
  pagination: swiper_pagination,
  allowSlideNext: true,
  allowSlidePrev: true,
  navigation: swiper_navigation,
  keyboard: true,
  scrollbar: false,
  effect: "slide",
  speed: 500
}
const swiper_provider = {
  provide: SWIPER_CONFIG,
  useValue: swiper_config
};

const perfect_scroll_provider =     {
  provide: PERFECT_SCROLLBAR_CONFIG,
  useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
};

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    PricingComponent,
    FooterComponent,
    CarouselComponent,
    FeaturesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PerfectScrollbarModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    SwiperModule
  ],
  providers: [
    swiper_provider,
    perfect_scroll_provider,
    { provide: FirestoreSettingsToken, useValue: {} },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
