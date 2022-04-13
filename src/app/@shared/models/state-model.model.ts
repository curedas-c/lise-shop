import { Customer, CustomerMeasures } from './customer.model';
import { Dress } from './dress.model';
import { Order, OrderContact } from './order.model';
import { PaymentOptions } from './payment.model';

export type CustomerStateModel = {
  currentCustomer: Customer | undefined;
  currentPickedDress: Dress | undefined;
  lastKnownCustomerMeasures: CustomerMeasures | undefined;
  lastKnownCustomerContact: OrderContact | undefined;
  lastKnownCustomerPaymentInfo: PaymentOptions | undefined;
};

export type OrderStateModel = {
  customerOrders: Order[];
  orderInProgress: Order | undefined;
};
