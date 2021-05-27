import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AccountModule } from './account/account.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

import { AngularFireModule } from '@angular/fire';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYvf6Y_1mj2ue-211md2Ms6kZLQaW8bcg",
  authDomain: "celeri-14.firebaseapp.com",
  projectId: "celeri-14",
  storageBucket: "celeri-14.appspot.com",
  messagingSenderId: "911862104048",
  appId: "1:911862104048:web:090164d1f236e9b3336735",
  measurementId: "G-0ZXQZCXEZC"
};

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
    CoreModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
