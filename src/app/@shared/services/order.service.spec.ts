import { TestBed } from '@angular/core/testing';

import { OrderService } from './order.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Customer } from '@shared/models/customer.model';
import { Order, OrderContact } from '../models/order.model';
import { PaymentOptions } from '@shared/models/payment.model';
import { orderUrl } from '@shared/constants/endpoints.constant';
import { CustomerMeasures } from '../models/customer.model';

describe('OrderService', () => {
  let service: OrderService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let customer: Customer;
  let contacts: OrderContact;
  let measures: CustomerMeasures;
  let payment: PaymentOptions;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(OrderService);

    customer = {
      id: '',
      firstName: '',
      lastName: '',
      phone: ['']
    };
    contacts = {
      phoneNumber: '',
      preferredDeliveryAddress: ''
    };
    measures = {
      sleeveLength: 88,
      shoulderLength: 50,
      chestLength: 19,
      bellyCircumference: 40,
      legLength: 80,
      pantCircumference: 22,
      hipCircumference: 15,
      thighCircumference: 60
    };
    payment = {
      type: 'mobile_money',
      mobileMoneyPhoneNumber: ''
    };
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create an order and respond with order object', () => {
    const orderResponse = new Order({
      id: 'ade-58-hj',
      customerRef: '555888ml',
      dressRef: '99pmo-nj'
    });
    service.createOrder(customer, contacts, measures, payment).subscribe(order => {
      expect(order).toBe(orderResponse);
    });
    const createOrderRequest = httpTestingController.expectOne(orderUrl);
    createOrderRequest.flush(orderResponse);

    expect(createOrderRequest.request.method).toEqual('POST');
  });

  it('should throw an error when trying to create an order and server does not provide a response', () => {
    const mockError = new ProgressEvent('error');

    service.createOrder(customer, contacts, measures, payment).subscribe({
      error: err => {
        expect(err).toBe(mockError);
      }
    });
    const createOrderRequest = httpTestingController.expectOne(orderUrl);
    createOrderRequest.error(mockError);
  });
});
