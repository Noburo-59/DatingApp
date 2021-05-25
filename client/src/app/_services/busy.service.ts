import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusyService {
  busyRequestCount = 0;
  busyBehaviorSubject = new BehaviorSubject(false);
  BusyObservable$ = this.busyBehaviorSubject.asObservable();

    constructor() { }

  busy() {
    this.busyRequestCount++;
    this.busyBehaviorSubject.next(true);
  }

  idle() {
    this.busyRequestCount--;

    if (this.busyRequestCount <= 0) {
      this.busyRequestCount = 0;
      this.busyBehaviorSubject.next(false);
    }
  }
}
