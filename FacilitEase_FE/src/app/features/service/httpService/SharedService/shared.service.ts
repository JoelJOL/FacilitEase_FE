import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}
  private _notification = new Subject<string>();
  notification$ = this._notification.asObservable();

  sendNotification(message: string) {
    this._notification.next(message);
  }
}
