import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  perfectScrollbar: PerfectScrollbarDirective;
  topBarListener: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { 
  }

}
