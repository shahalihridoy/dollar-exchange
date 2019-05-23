import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from "@angular/core";
import { MatSidenav } from "@angular/material";
import { Subscription } from "rxjs";
import { SharedService } from "src/app/shared/services/shared.service";
import { AuthService } from "src/app/shared/services/auth.service";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { filter } from 'rxjs/operators';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HeaderComponent implements OnInit, OnDestroy {

  @Input("sidenav") sidenav: MatSidenav;

  sub: Subscription;
  routeSub: Subscription;
  showOptions: boolean = true;

  topBarClass: string = "header";

  constructor(
    private router: Router,
    private authService: AuthService,
    private service: SharedService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    if (!this.sub) {
      this.sub = this.service.topBarListener.subscribe(isFixed => {
        isFixed ? this.topBarClass = "header-fixed" : this.topBarClass = "header";
        this.cdr.markForCheck();
      })
    }
    else this.sub.unsubscribe();

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
    // throw new Error("Method not implemented.");
  }

  ngOnDestroy() {
    if (this.sub) this.sub.unsubscribe();
    if(this.routeSub) this.routeSub.unsubscribe();
  }

  get user() {
    return this.authService.userObservable;
  }

  signout() {
    this.authService.logout().then(() => {
      this.router.navigateByUrl("");
    });
  }

  scrollTo(id:string) {
    if(this.topBarClass === "header")
      this.service.perfectScrollbar.scrollToElement(`#${id}`,-80,500);
    else this.service.perfectScrollbar.scrollToElement(`#${id}`,0,500);
  }

  scrollTop() {
    this.service.perfectScrollbar.scrollToTop(0,500);
  }
}
