import { Component, OnInit } from '@angular/core';
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
    let item = localStorage.getItem('user');

    if (item) {
      this.accoutService.setCurrentUser(JSON.parse(item));
    }
    else {
      this.accoutService.logout();
    }
  }
}
