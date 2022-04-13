import { StateToken } from '@ngxs/store';
import { CustomerStateModel, OrderStateModel } from '../models/state-model.model';

export const CUSTOMER_STATE_TOKEN = new StateToken<CustomerStateModel>('customer');
export const ORDER_STATE_TOKEN = new StateToken<OrderStateModel>('order');
