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
import { MyDetailsComponent } from './my-details/my-details.component';
import { CoreModule } from '../core/core.module';
import { NewPracticeComponent } from './new-practice/new-practice.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ShopComponent,
    OrderComponent,
    ImplantComponent,
    CrownBridgeComponent,
    OrthodonticComponent,
    MyDetailsComponent,
    NewPracticeComponent
  ],
  imports: [
    CommonModule,
    DentistRoutingModule,
    SharedModule,
    CoreModule
  ]
})
export class DentistModule { }
