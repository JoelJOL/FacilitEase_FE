import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import * as signalR from '@aspnet/signalr';
import { SharedService } from '../SharedService/shared.service';
@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private hubConnection!: signalR.HubConnection;

  constructor(
    private toastr: ToastrService,
    private sharedService: SharedService
  ) {}

  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:7049/notificationHub')
      .build();

    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .then(() => this.addTransferChartDataListener)
      .catch((err) => console.log('Error while starting connection: ' + err));
  };

  public addTransferChartDataListener = () => {
    console.log('blabalassd');
    this.hubConnection.on('ReceiveNotification', (data) => {
      console.log('recifdfdfdf');
      this.toastr.success(data);
      this.sharedService.sendNotification(data);
    });
  };
}
