import { Component, HostListener, OnInit, ElementRef } from '@angular/core';
import { AzureService } from '@app/features/Authentication/azureService/azure.service';
import { NotificationService } from '@app/features/service/httpService/NotificationService/notification.service';
import { Notification } from '@app/features/service/notification/notification.model';

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
    private azureService: AzureService,
    private eRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.fetchNotifications();
    setInterval(() => {
      this.fetchNotifications();
    }, 3000);
  }

  fetchNotifications(): void {
    const userId = this.azureService.userId;
    this.notificationService
      .getNotifications(userId)
      .subscribe((notifications) => {
        // Sort notifications by timestamp in descending order
        this.notifications = notifications.sort(
          (a, b) =>
            new Date(b.notificationTimestamp).getTime() -
            new Date(a.notificationTimestamp).getTime()
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

  @HostListener('document:click', ['$event'])
  clickout(event: { target: any }) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.showNotifications = false;
    }
  }
}
