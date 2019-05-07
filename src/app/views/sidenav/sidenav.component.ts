import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Input('sidenav') sidenav: MatSidenav;
  
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {

  }

  signout() {
    this.authService.logout();
    this.sidenav.toggle();
    this.router.navigateByUrl("/sessions/signin");
  }

  get user() {
    return this.authService.userObservable;
  }
}
