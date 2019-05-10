import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { switchMap, debounceTime, catchError } from 'rxjs/operators';
import PerfectScrollbar from 'perfect-scrollbar';
import { PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  searchTerm: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  perfectScrollbar: PerfectScrollbarDirective;
  topBarListener: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { 
  }

  updateSearchTerm(term: string) {
      this.searchTerm.next(term);
  }

  getSearchTerm() {
    return this.searchTerm;
  }


}
