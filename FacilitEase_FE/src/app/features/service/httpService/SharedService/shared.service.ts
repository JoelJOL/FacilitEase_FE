import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}
  private _notification = new Subject<{ userId: number; text: string }>();
  notification$ = this._notification.asObservable();

  sendNotification(message: { userId: number; text: string }) {
    this._notification.next(message);
  }
}
