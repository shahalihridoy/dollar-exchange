import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Signin4Component } from './signin4/signin4.component';
import { Signup4Component } from './signup4/signup4.component';

const routes: Routes = [
  {
    path: 'signin',
    component: Signin4Component
  },
  {
    path: 'signup',
    component: Signup4Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionsRoutingModule { }
