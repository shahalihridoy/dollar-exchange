import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild(PerfectScrollbarDirective) perfectScrollbar: PerfectScrollbarDirective;
  rejectCall: boolean = false;

  constructor(private sharedService: SharedService) {
   }

  getScrollHeight(event: any) {
    if(!this.rejectCall) {
      this.rejectCall = true;
      setTimeout(() => {
        let { scrollTop } = event.target;
        scrollTop > 0 ?
          this.sharedService.topBarListener.next(true):
          this.sharedService.topBarListener.next(false)
          this.rejectCall = false;
      }, 250);
    }
  }

  ngOnInit() {
    this.sharedService.perfectScrollbar = this.perfectScrollbar;
  }

  ngAfterViewInit() {

  }
}
