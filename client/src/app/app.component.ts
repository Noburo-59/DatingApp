import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { LocalStorageHelper } from './helpers/localstorageHelper';
import { AccountService } from './_services/account.service';
import { BusyService } from './_services/busy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  load = false;

  title = 'The Dating App';
  users: any;

  constructor(private accoutService: AccountService, private busyService: BusyService) { }

  ngOnInit() {
    this.setCurrentUser();

    this.busyService.BusyObservable$.
      pipe(
      delay(100)).
      subscribe(show => {
      this.load = show;
    })
  }

  setCurrentUser() {
    let user = LocalStorageHelper.GetUser();

    if (user) {
      this.accoutService.setCurrentUser(JSON.parse(user));
    }
    else {
      this.accoutService.logout();
    }
  }
}
