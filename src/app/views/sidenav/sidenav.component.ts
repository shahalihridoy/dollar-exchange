import { Component, OnInit, Input, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router, NavigationEnd } from '@angular/router';
import { SharedService } from 'src/app/shared/services/shared.service';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent implements OnInit, OnDestroy {

  @Input('sidenav') sidenav: MatSidenav;
  routeSub: Subscription;
  showOptions: boolean = true;
  
  constructor(private cdr: ChangeDetectorRef, private authService: AuthService,private service: SharedService, private router: Router) { }

  ngOnInit() {
    if(!this.routeSub) {
      this.routeSub = this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)  
      ).subscribe((event: NavigationEnd) => {
        if(!(event.url as string).includes("exchange"))
          this.showOptions = true;
        else this.showOptions = false;
        this.cdr.markForCheck();
      });
      
    } else this.routeSub.unsubscribe();
  }

  ngOnDestroy(): void {
    if(this.routeSub) this.routeSub.unsubscribe();
  }

  signout() {
    this.authService.logout();
    this.sidenav.toggle();
    this.router.navigateByUrl("/home");
  }

  get user() {
    return this.authService.userObservable;
  }

  scrollTo(id:string) {
    this.sidenav.toggle();
    this.service.perfectScrollbar.scrollToElement(`#${id}`,0,500);
  }

  scrollTop() {
    this.service.perfectScrollbar.scrollToTop(0,500);
  }
}
