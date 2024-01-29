// sidebar.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  toggleCollapse() {
    throw new Error('Method not implemented.');
  }
  private sidebarStateSubject = new Subject<boolean>();

  sidebarState$ = this.sidebarStateSubject.asObservable();

  toggleSidebar(isCollapsed: boolean) {
    this.sidebarStateSubject.next(isCollapsed);
  }
}
