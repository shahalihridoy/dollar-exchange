import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { switchMap, debounceTime, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  searchTerm: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor() { 
  }

  updateSearchTerm(term: string) {
      this.searchTerm.next(term);
  }

  getSearchTerm() {
    return this.searchTerm;
  }



}
