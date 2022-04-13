export class Order {
  id: string;
  customerRef: any;
  dressRef: any;

  constructor(orderModel: any) {
    this.id = orderModel.id || '';
    this.customerRef = orderModel.customerRef || undefined;
    this.dressRef = orderModel.dressRef || undefined;
  }
}

export type OrderContact = {
  phoneNumber: string;
  preferredDeliveryAddress: string;
};
