import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShopComponent } from './shop/shop.component';
import { ImplantComponent } from './implant/implant.component';
import { CrownBridgeComponent } from './crown-bridge/crown-bridge.component';
import { OrthodonticComponent } from './orthodontic/orthodontic.component';
import { MyDetailsComponent } from './my-details/my-details.component';

const routes: Routes = [
  {
    path : "" , 
      children : [
        { path : 'home' ,             component: DashboardComponent},
        { path : 'shop' ,             component: ShopComponent},
        { path : 'details' ,          component: MyDetailsComponent},
        { path : 'shop/implant',      component: ImplantComponent},
        { path : 'shop/crown',        component: CrownBridgeComponent},
        { path : 'shop/orthodontic' , component: OrthodonticComponent}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DentistRoutingModule { }
