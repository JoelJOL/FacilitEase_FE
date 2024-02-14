// notification.model.ts

export interface Notification {
  id: number;
  content: string;
  notificationTimestamp: Date;
  isRead: boolean;
}
