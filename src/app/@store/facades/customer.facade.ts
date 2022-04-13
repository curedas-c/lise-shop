import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { CustomerMeasures } from '@shared/models/customer.model';
import { Dress } from '@shared/models/dress.model';
import { OrderContact } from '@shared/models/order.model';
import { PaymentOptions } from '@shared/models/payment.model';
import { Customer } from '@shared/models/customer.model';
import { Observable } from 'rxjs';
import { GiveContacts, GiveMeasurements, GivePaymentInfo, PickADress } from '../actions/customer.action';
import { CustomerState } from '../states/customer.state';

@Injectable()
export class CustomerFacade {
  // Selectors
  @Select(CustomerState.currentPickedDress) currentPickedDress$!: Observable<Dress | undefined>;

  constructor(private store: Store) {}

  // Action Dispatchers
  pickADress(dress: Dress) {
    this.store.dispatch(new PickADress(dress));
  }

  giveMeasurements(measures: CustomerMeasures) {
    this.store.dispatch(new GiveMeasurements(measures));
  }

  giveContacts(contact: OrderContact) {
    this.store.dispatch(new GiveContacts(contact));
  }

  givePaymentInfo(paymentInfo: PaymentOptions) {
    this.store.dispatch(new GivePaymentInfo(paymentInfo));
  }

  // Snapshots
  getCurrentCustomer(): Customer {
    return this.store.selectSnapshot(state => state.customer.currentCustomer);
  }
  getPickedDress(): Dress {
    return this.store.selectSnapshot(state => state.customer.currentPickedDress);
  }
  getLastKnownCustomerMeasures(): CustomerMeasures {
    return this.store.selectSnapshot(state => state.customer.lastKnownCustomerMeasures);
  }
  getLastKnownCustomerContact(): OrderContact {
    return this.store.selectSnapshot(state => state.customer.lastKnownCustomerContact);
  }
  getLastKnownCustomerPaymentInfo(): PaymentOptions {
    return this.store.selectSnapshot(state => state.customer.lastKnownCustomerPaymentInfo);
  }
}
