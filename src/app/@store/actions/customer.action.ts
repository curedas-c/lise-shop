import { Dress } from '@shared/models/dress.model';
import { PaymentOptions } from '@shared/models/payment.model';
import { CustomerMeasures } from '@shared/models/customer.model';
import { OrderContact } from '@shared/models/order.model';

export class PickADress {
  static readonly type = '[Customer] Pick A Dress';
  constructor(public dress: Dress) {}
}

export class GiveMeasurements {
  static readonly type = '[Customer] Give Measurements';
  constructor(public measures: CustomerMeasures) {}
}

export class GiveContacts {
  static readonly type = '[Customer] Give Contacts';
  constructor(public contact: OrderContact) {}
}

export class GivePaymentInfo {
  static readonly type = '[Customer] Give Payment Info';
  constructor(public paymentInfo: PaymentOptions) {}
}
