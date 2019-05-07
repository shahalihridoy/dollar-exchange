import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SessionsRoutingModule } from "./sessions-routing.module";
import { Signup4Component } from "./signup4/signup4.component";
import { Signin4Component } from "./signin4/signin4.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/modules/material.module';

@NgModule({
  declarations: [Signup4Component, Signin4Component],
  imports: [
    CommonModule,
    SessionsRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    PerfectScrollbarModule,
    ReactiveFormsModule
  ]
})
export class SessionsModule {}
