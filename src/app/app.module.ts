import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AccountModule } from './account/account.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';

import { AngularFireModule } from '@angular/fire';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';


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
    AngularFireModule.initializeApp(firebaseConfig),
    NgxAuthFirebaseUIModule.forRoot(firebaseConfig, () => 'your_app_name_factory',
    {
      enableFirestoreSync: true, // enable/disable autosync users with firestore
      toastMessageOnAuthSuccess: false, // whether to open/show a snackbar message on auth success - default : true
      toastMessageOnAuthError: true, // whether to open/show a snackbar message on auth error - default : true
      authGuardFallbackURL: '/', // url for unauthenticated users - to use in combination with canActivate feature on a route
      authGuardLoggedInURL: '/dentist/home', // url for authenticated users - to use in combination with canActivate feature on a route
      passwordMaxLength: 60, // `min/max` input parameters in components should be within this range.
      passwordMinLength: 8, // Password length min/max in forms independently of each componenet min/max.
      // Same as password but for the name
      nameMaxLength: 50,
      nameMinLength: 2,
      // If set, sign-in/up form is not available until email has been verified.
      // Plus protected routes are still protected even though user is connected.
      guardProtectedRoutesUntilEmailIsVerified: true,
      enableEmailVerification: false, // default: true
      useRawUserCredential: false, // If set to true outputs the UserCredential object instead of firebase.User after login and signup - Default: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
