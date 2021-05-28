import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './account/auth.guard';



const routes: Routes = [ 

  { path: 'home', component: HomeComponent },
  { path: 'dentist', loadChildren: () => import('./dentist/dentist.module').then(mod => mod.DentistModule), canActivate: [AuthGuard]},
  { path: '' , redirectTo: 'login', pathMatch: 'full'}
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
