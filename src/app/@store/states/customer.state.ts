import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { CUSTOMER_STATE_TOKEN } from '@shared/constants/state-tokens.constant';
import { Customer } from '@shared/models/customer.model';
import { CustomerStateModel } from '@shared/models/state-model.model';
import { PickADress, GiveMeasurements, GiveContacts, GivePaymentInfo } from '../actions/customer.action';
import { CreateOrderAndPay } from '../actions/order.action';

@State({
  name: CUSTOMER_STATE_TOKEN,
  defaults: {
    currentCustomer: new Customer({
      id: '248',
      firstName: 'John',
      lastName: 'Doe',
      phone: '0701554422'
    }),
    currentPickedDress: undefined,
    lastKnownCustomerMeasures: undefined,
    lastKnownCustomerContact: undefined,
    lastKnownCustomerPaymentInfo: undefined
  }
})
@Injectable()
export class CustomerState {
  constructor() {}

  @Action(PickADress)
  PickADress(ctx: StateContext<CustomerStateModel>, action: PickADress) {
    ctx.patchState({
      currentPickedDress: action.dress
    });
  }

  @Action(GiveMeasurements)
  GiveMeasurements(ctx: StateContext<CustomerStateModel>, action: GiveMeasurements) {
    ctx.patchState({
      lastKnownCustomerMeasures: action.measures
    });
  }

  @Action(GiveContacts)
  GiveContacts(ctx: StateContext<CustomerStateModel>, action: GiveContacts) {
    ctx.patchState({
      lastKnownCustomerContact: action.contact
    });
  }

  @Action(GivePaymentInfo)
  GivePaymentInfo(ctx: StateContext<CustomerStateModel>, action: GivePaymentInfo) {
    ctx.patchState({
      lastKnownCustomerPaymentInfo: action.paymentInfo
    });

    return ctx.dispatch(new CreateOrderAndPay());
  }

  @Selector()
  static currentPickedDress(state: CustomerStateModel) {
    return state.currentPickedDress;
  }
}
