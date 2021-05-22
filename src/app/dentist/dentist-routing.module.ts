import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShopComponent } from './shop/shop.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  { path : 'dentist/home' , component: DashboardComponent},
  { path : 'dentist/shop' , component: ShopComponent},
  { path : 'dentist/orders' , component: OrderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DentistRoutingModule { }
