import { Component, OnInit } from '@angular/core';
import { AzureService } from '@app/features/Authentication/azureService/azure.service';
import { NotificationService } from '@app/features/service/httpService/NotificationService/notification.service';
import { Notification } from '@app/notification.model';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent implements OnInit {
  notifications: Notification[] = [];
  showNotifications = false;
  selectedNotificationId: number | null | undefined;

  constructor(
    private notificationService: NotificationService,
    private azureService: AzureService
  ) {}

  ngOnInit(): void {
    this.fetchNotifications();
  }

  fetchNotifications(): void {
    const userId = this.azureService.userId;
    this.notificationService
      .getNotifications(userId)
      .subscribe((notifications) => {
        // Sort notifications by timestamp in descending order
        this.notifications = notifications.sort(
          (a, b) =>
            new Date(a.notificationTimestamp).getTime() -
            new Date(b.notificationTimestamp).getTime()
        );
      });
  }

  toggleNotifications(): void {
    // Toggle the showNotifications property to display/hide notifications
    this.showNotifications = !this.showNotifications;
  }

  showTicketDetails(ticketId: number): void {
    // Toggle the selectedNotificationId to show/hide ticket details
    this.selectedNotificationId =
      this.selectedNotificationId === ticketId ? null : ticketId;
  }
}
