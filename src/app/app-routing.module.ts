import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "sessions",
    loadChildren: "./views/sessions/sessions.module#SessionsModule"
  },
  {
    path: "exchange",
    canActivate: [AuthGuard],
    loadChildren: "./views/exchange/exchange.module#ExchangeModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
