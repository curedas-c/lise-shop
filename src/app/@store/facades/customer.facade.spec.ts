import { TestBed } from '@angular/core/testing';
import { CustomerFacade } from './customer.facade';
import { StoreModule } from '@shared/modules/store.module';
import { HttpClientModule } from '@angular/common/http';
import { Dress } from '@shared/models/dress.model';
import { Store } from '@ngxs/store';
import { CustomerMeasures } from '@shared/models/customer.model';
import { PaymentOptions } from '@shared/models/payment.model';
import { OrderService } from '@shared/services/order.service';

const DEFAULT_CUSTOMER_STATE = {
  currentCustomer: undefined,
  currentPickedDress: undefined,
  lastKnownCustomerMeasures: undefined,
  lastKnownCustomerContact: undefined,
  lastKnownCustomerPaymentInfo: undefined
};

describe('CustomerFacade', () => {
  let facade: CustomerFacade;
  let store: Store;
  let orderService: OrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule, HttpClientModule]
    });
    store = TestBed.inject(Store);
    store.reset({
      ...store.snapshot(),
      customer: DEFAULT_CUSTOMER_STATE
    });

    facade = TestBed.inject(CustomerFacade);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  it('should add on state, current dress selected by user', () => {
    const dress = new Dress({
      id: '',
      fabric: {},
      name: 'Zara Thy'
    });
    facade.pickADress(dress);

    const dressSnapshot = facade.getPickedDress();
    expect(dressSnapshot).toEqual(dress);
  });

  it('should add on state, user measures', () => {
    const measures: CustomerMeasures = {
      sleeveLength: 88,
      shoulderLength: 50,
      chestLength: 19,
      bellyCircumference: 40,
      legLength: 80,
      pantCircumference: 22,
      hipCircumference: 15,
      thighCircumference: 60
    };
    facade.giveMeasurements(measures);

    const measuresSnapshot = facade.getLastKnownCustomerMeasures();
    expect(measuresSnapshot).toEqual(measures);
  });

  it('should try to create order when payment options are added', () => {
    const paymentInfo: PaymentOptions = {
      type: 'mobile_money',
      mobileMoneyPhoneNumber: '123456789'
    };
    orderService = TestBed.inject(OrderService);
    const spy = jest.spyOn(orderService, 'createOrder');

    facade.givePaymentInfo(paymentInfo);

    const paymentSnapshot = facade.getLastKnownCustomerPaymentInfo();
    expect(paymentSnapshot).toEqual(paymentInfo);
    expect(spy).toHaveBeenCalled();
  });
});
