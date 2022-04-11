export class OrderNotification {
  orderRef: any;
  title: string;
  message: string;

  constructor(notificationModel: any) {
    this.orderRef = notificationModel.id || undefined;
    this.title = notificationModel.title || '';
    this.message = notificationModel.message || '';
  }
}
