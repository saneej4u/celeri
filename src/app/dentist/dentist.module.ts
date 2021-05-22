import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DentistRoutingModule } from './dentist-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { ShopComponent } from './shop/shop.component';
import { OrderComponent } from './order/order.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ShopComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    DentistRoutingModule,
    SharedModule
  ]
})
export class DentistModule { }
