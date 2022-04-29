import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrdersJNComponent} from "./components/orders-jn/orders-jn.component";
import {OrdersDetailsJNComponent} from "./components/orders-details-jn/orders-details-jn.component";

const routes: Routes = [
  {
    path: '',
    component: OrdersJNComponent
  },
  {
    path: 'post/:id',
    component: OrdersDetailsJNComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
