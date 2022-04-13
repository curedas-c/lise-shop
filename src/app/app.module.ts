import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { StoreModule } from '@shared/modules/store.module';

const MODULES = [LoadingBarModule, LoadingBarHttpClientModule, StoreModule];
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ...MODULES],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
