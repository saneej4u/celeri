import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShopComponent } from './shop/shop.component';
import { ImplantComponent } from './implant/implant.component';
import { CrownBridgeComponent } from './crown-bridge/crown-bridge.component';
import { OrthodonticComponent } from './orthodontic/orthodontic.component';
import { MyDetailsComponent } from './my-details/my-details.component';

const routes: Routes = [
  { path : 'dentist/home' , component: DashboardComponent},
  { path : 'dentist/shop' , component: ShopComponent},
  { path : 'dentist/details' , component: MyDetailsComponent},
  { path : 'dentist/shop/implant', component: ImplantComponent},
  { path : 'dentist/shop/crown', component: CrownBridgeComponent},
  { path : 'dentist/shop/orthodontic' , component: OrthodonticComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DentistRoutingModule { }
