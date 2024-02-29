import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import * as signalR from '@aspnet/signalr';
import { SharedService } from '../SharedService/shared.service';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Notification } from '../../notification/notification.model';

/**
 * Service for handling real-time notifications using SignalR.
 */
@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private hubConnection!: signalR.HubConnection;
  private apiUrl = 'https://localhost:7049/api';

  /**
   * Initializes a new instance of the NotificationService class.
   * @param toastr - The ToastrService for displaying toast notifications.
   * @param sharedService - The SharedService for communication between components.
   * @param http - The HttpClient for making HTTP requests.
   */

  constructor(
    private toastr: ToastrService,
    private sharedService: SharedService,
    private http: HttpClient
  ) {}

  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:7049/notificationHub')
      .build();

    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .then(() => this.addTransferChartDataListener())
      .catch((err) => console.log('Error while starting connection: ' + err));
  };

  public addTransferChartDataListener = () => {
    console.log('blabalassd');
    this.hubConnection.on('ReceiveNotification', (data) => {
      console.log('recifdfdfdf');
      // this.toastr.success(data.text);
      this.sharedService.sendNotification(data);
    });
  };

  getNotifications(userId: number): Observable<Notification[]> {
    return this.http
      .get<Notification[]>(`${this.apiUrl}/Notifications/${userId}`)
      .pipe(
        catchError((error: any) => {
          console.error('Error fetching notifications:', error);
          return throwError(error);
        })
      );
  }
}
