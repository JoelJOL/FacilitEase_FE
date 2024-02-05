import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserRoleService {
  private userRoleSubject = new BehaviorSubject<string>('');
  userRole$ = this.userRoleSubject.asObservable();

  setUserRole(userRole: string): void {
    this.userRoleSubject.next(userRole);
  }

  getUserRole(): string {
    return this.userRoleSubject.value;
  }

  getUserRoles(): string[] {
    return [
      'L1 Admin',
      'L2 Admin',
      'L3 Admin',
      'Manager',
      'Department Head',
      'Employee',
    ];
  }
}
