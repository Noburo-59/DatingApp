import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LocalStorageHelper } from '../helpers/localstorageHelper';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private currentUserSource = new ReplaySubject<User>(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) { }

  login(model: any) {
    return this.http.post<User>(environment.loginUrl, model).pipe(
      map(user => {
        if (user) {
          this.setCurrentUser(user);       
        }
      })
    );
  }

  register(model: any) {
    return this.http.post<User>(environment.registerUrl, model).pipe(
      map(user => {
        if (user) {
         this.setCurrentUser(user);
        }        
      })
    )
  }

  setCurrentUser(user: User) {
    LocalStorageHelper.SetItem(LocalStorageHelper.keys.user, user);
    this.currentUserSource.next(user);
  }

  logout() {
    LocalStorageHelper.RemoveItem(LocalStorageHelper.keys.user);
    this.currentUserSource.next();
  }
}
