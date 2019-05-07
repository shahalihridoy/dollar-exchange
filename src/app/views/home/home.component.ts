import { Component, OnInit, HostListener, ViewChild, AfterViewInit } from '@angular/core';
import { of } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  getScrollHeight(event) {
    let a = of(event).pipe(debounceTime(2000));
    a.subscribe(res => {
      let {scrollTop} = res.target;
        console.log(scrollTop);
        
    }
    );
  }
  ngOnInit() {
  }

}
