import { Injectable } from "@angular/core";
import {
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from "@angular/router";
import { Observable, of, from, BehaviorSubject } from "rxjs";
import { AngularFireAuth } from "@angular/fire/auth";
import { map, switchMap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean>{
    return  this.getUserAuthentication();
  }


  canActivateChild(): Promise<boolean>{
    return this.getUserAuthentication();
  }


  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Promise<boolean> | Promise<boolean> | boolean {
    return this.getUserAuthentication();
  }

  getUserAuthentication() : Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.authService.getCurrentUser()
      .then(user => {
        return resolve(true);
      }, err => {
        this.router.navigate(['/sessions/signin']);
        return resolve(false);
      })
    })
  }
}
