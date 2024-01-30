import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserRoleService {
  constructor() {}
  private userRoleSubject = new BehaviorSubject<string>('');
  userRole$ = this.userRoleSubject.asObservable();
  setUserRole(userRole: string): void {
    this.userRoleSubject.next(userRole);
  }
}
