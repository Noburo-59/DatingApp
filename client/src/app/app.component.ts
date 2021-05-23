import { Component, OnInit } from '@angular/core';
import { LocalStorageHelper } from './helpers/localstorageHelper';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  users: any;

  constructor(private accoutService: AccountService) {
  }

  ngOnInit() {
    this.setCurrentUser();
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
