import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExchangeRoutingModule } from './exchange-routing.module';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [BuyComponent, SellComponent],
  imports: [
    CommonModule,
    ExchangeRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule
  ],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class ExchangeModule { }
