import {
  Component,
  OnInit,
  Input,
  OnDestroy
} from "@angular/core";
import { MatSidenav } from "@angular/material";
import { Subscription } from "rxjs";
import { SharedService } from "src/app/shared/services/shared.service";
import { FormControl } from "@angular/forms";
import {
  trigger,
  transition,
  style,
  animate
} from "@angular/animations";
import { AuthService } from "src/app/shared/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  animations: [
    trigger("slide", [
      transition("void => *", [
        style({
          height: "0px",
          overflow: "hidden"
        }),
        animate(150)
      ]),

      transition("* => void", [
        animate(
          150,
          style({
            height: "0px",
            overflow: "hidden"
          })
        )
      ])
    ])
  ]
})

export class HeaderComponent implements OnInit, OnDestroy {
  // tslint:disable-next-line: no-input-rename
  @Input("sidenav") sidenav: MatSidenav;

  mode: string;
  showSearchOption: boolean = false;
  sub: Subscription;

  searchControl: FormControl = new FormControl("");
  topBarClass: string = "header";

  constructor(
    private router: Router,
    private authService: AuthService,
    public service: SharedService
  ) {}

  ngOnInit() {
    if (!this.sub) {
      this.sub = this.service.topBarListener.subscribe(isFixed => {
        isFixed ? this.topBarClass = "header-fixed" : this.topBarClass = "header"
      })
    }
    else this.sub.unsubscribe();

    // throw new Error("Method not implemented.");
  }

  ngOnDestroy() {
    if (this.sub) this.sub.unsubscribe();
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
    this.service.perfectScrollbar.scrollToElement(`#${id}`,-104,500);
  }
}
