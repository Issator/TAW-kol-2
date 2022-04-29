import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {JNDataService} from "./jn-data.service";
import { OrdersJNComponent } from './components/orders-jn/orders-jn.component';
import { OrdersItemJNComponent } from './components/orders-item-jn/orders-item-jn.component';
import { OrdersDetailsJNComponent } from './components/orders-details-jn/orders-details-jn.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdersJNComponent,
    OrdersItemJNComponent,
    OrdersDetailsJNComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [JNDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
