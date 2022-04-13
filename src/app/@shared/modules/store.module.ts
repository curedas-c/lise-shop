import { NgModule } from '@angular/core';
import { environment } from '@environments/environment';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';

import { CustomerFacade } from '@store/facades/customer.facade';
import { CustomerState } from '@store/states/customer.state';
import { OrderState } from '@store/states/order.state';

const MODULES = [
  NgxsModule.forRoot([CustomerState, OrderState], {
    developmentMode: !environment.production
  }),
  NgxsLoggerPluginModule.forRoot(),
  NgxsReduxDevtoolsPluginModule.forRoot(),
  NgxsStoragePluginModule.forRoot(),
  NgxsFormPluginModule.forRoot()
];

@NgModule({
  imports: [...MODULES],
  providers: [CustomerFacade],
  exports: []
})
export class StoreModule {}
