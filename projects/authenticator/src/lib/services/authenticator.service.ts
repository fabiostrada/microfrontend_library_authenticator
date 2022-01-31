import { Injectable } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { StateService } from './state.service';
import { StateItem } from '../config/state.item';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatorService {

  constructor(private stateService: StateService) { }

  public currentUser(): Observable<User | undefined> {
      let currentUser: User | undefined = this.stateService.getItem<User>(StateItem.USER);    
      return of(!!currentUser ? currentUser : undefined);
  }

  public setCurrentUser(user: User): Observable<void> {
      this.stateService.setItem(user, StateItem.USER);
      return of();
  }

  public logout(): Observable<void> {
      this.stateService.removeItem(StateItem.USER);
      return of();
  }

  public isAdmin(): Observable<boolean> {
    return this.currentUser()
      .pipe(switchMap((user: User | undefined) => {
          let isAdmin: boolean = !!user && User.isAdmin(user);
          return of(isAdmin);
      })) as Observable<boolean>;
  }
    
  public isDashboard(): Observable<boolean> {
    return this.currentUser()
      .pipe(switchMap((user: User | undefined) => {
          let isAdmin: boolean = !!user && User.isDashboard(user);
          return of(isAdmin);
      })) as Observable<boolean>;
  }

}
