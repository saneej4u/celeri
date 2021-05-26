import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';



const routes: Routes = [ 

  { path: '', component: HomeComponent },
  { path: 'dentist', loadChildren: () => import('./dentist/dentist.module').then(mod => mod.DentistModule)},
  { path: '' , redirectTo: '', pathMatch: 'full'}
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
