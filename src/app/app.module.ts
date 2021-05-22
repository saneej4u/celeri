import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AccountModule } from './account/account.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { DentistModule } from './dentist/dentist.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    AccountModule,
    SharedModule,
    DentistModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
