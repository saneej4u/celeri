import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DentistRoutingModule } from './dentist-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { ShopComponent } from './shop/shop.component';
import { OrderComponent } from './order/order.component';
import { ImplantComponent } from './implant/implant.component';
import { CrownBridgeComponent } from './crown-bridge/crown-bridge.component';
import { OrthodonticComponent } from './orthodontic/orthodontic.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ShopComponent,
    OrderComponent,
    ImplantComponent,
    CrownBridgeComponent,
    OrthodonticComponent
  ],
  imports: [
    CommonModule,
    DentistRoutingModule,
    SharedModule
  ]
})
export class DentistModule { }