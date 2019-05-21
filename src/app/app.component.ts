import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dollar-exchange';

  @ViewChild(PerfectScrollbarDirective) perfectScrollbar: PerfectScrollbarDirective;
  rejectCall: boolean = false;
  timer;
  constructor(private sharedService: SharedService) {
   }

  getScrollHeight(event: any) {
    // fromEvent(event.target,"scroll").pipe(
    //   debounceTime(250)
    // ).subscribe(scrollEvent => {

    // })
    // if(!this.rejectCall) {
    //   this.rejectCall = true;
    //   setTimeout(() => {
    //     let { scrollTop } = event.target;
    //     scrollTop > 100 ?
    //       this.sharedService.topBarListener.next(true):
    //       this.sharedService.topBarListener.next(false)
    //       this.rejectCall = false;
    //   }, 500);
    // }

    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
              let { scrollTop } = event.target;
        scrollTop > 100 ?
          this.sharedService.topBarListener.next(true):
          this.sharedService.topBarListener.next(false)
    }, 200);

  }

  ngOnInit() {
    this.sharedService.perfectScrollbar = this.perfectScrollbar;
  }
}
