import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShopComponent } from './shop/shop.component';
import { OrderComponent } from './order/order.component';
import { ImplantComponent } from './implant/implant.component';
import { CrownBridgeComponent } from './crown-bridge/crown-bridge.component';
import { OrthodonticComponent } from './orthodontic/orthodontic.component';

const routes: Routes = [
  { path : 'dentist/home' , component: DashboardComponent},
  { path : 'dentist/shop' , component: ShopComponent},
  { path : 'dentist/orders' , component: OrderComponent},
  { path : 'dentist/shop/implant', component: ImplantComponent},
  { path : 'dentist/shop/crown', component: CrownBridgeComponent},
  { path : 'dentist/shop/orthodontic' , component: OrthodonticComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DentistRoutingModule { }
