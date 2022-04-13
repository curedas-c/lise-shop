import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { ORDER_STATE_TOKEN } from '@shared/constants/state-tokens.constant';
import { OrderStateModel } from '@shared/models/state-model.model';
import { CreateOrderAndPay } from '../actions/order.action';
import { OrderService } from '@shared/services/order.service';
import { CustomerFacade } from '../facades/customer.facade';
import { tap } from 'rxjs/operators';

@State({
  name: ORDER_STATE_TOKEN,
  defaults: {
    customerOrders: [],
    orderInProgress: undefined
  }
})
@Injectable()
export class OrderState {
  constructor(private orderService: OrderService, private customerFacade: CustomerFacade) {}

  @Action(CreateOrderAndPay)
  CreateOrderAndPay(ctx: StateContext<OrderStateModel>, action: CreateOrderAndPay) {
    return this.orderService
      .createOrder(
        this.customerFacade.getCurrentCustomer(),
        this.customerFacade.getLastKnownCustomerContact(),
        this.customerFacade.getLastKnownCustomerMeasures(),
        this.customerFacade.getLastKnownCustomerPaymentInfo()
      )
      .pipe(
        tap(order => {
          ctx.patchState({
            orderInProgress: order
          });
        })
      );
  }
}
