import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { orderUrl } from '@shared/constants/endpoints.constant';
import { Order } from '@shared/models/order.model';
import { PaymentOptions } from '@shared/models/payment.model';
import { Customer, CustomerMeasures } from '../models/customer.model';
import { OrderContact } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private http: HttpClient) {}

  createOrder(
    customer: Customer,
    contactOptions: OrderContact,
    desiredMeasures: CustomerMeasures,
    paymentOptions: PaymentOptions
  ) {
    return this.http.post<Order>(orderUrl, { customer, contactOptions, desiredMeasures, paymentOptions });
  }
}
