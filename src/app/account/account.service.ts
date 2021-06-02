import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  userData: any;
  private isLoggedInSource = new BehaviorSubject<any>(null);
  isLoggedIn$ = this.isLoggedInSource.asObservable();

  constructor(
    private auth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router
  ) {}

  OnLoggedInSuccess() {
    this.isLoggedInSource.next(true);

    this.auth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
        this.router.navigate(['/dentist/home']);
      }
    });
  }

  OnLogInFailed() {
    this.isLoggedInSource.next(false);
    localStorage.setItem('user', null);
    JSON.parse(localStorage.getItem('user'));
    this.router.navigate(['/']);
  }

  OnSignUpSuccess() {
    this.auth.authState.subscribe(user => {
      if (user) {
        console.log('User Sign Up: ' + user.uid);

        this.firestore
          .collection('users')
          .doc(user.uid)
          .set({ role: 'dentist' }, { merge: true });

        this.router.navigate(['/login']);
      }
    });
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null ? true : false;
  }

  // Sign out
  SignOut() {
    return this.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.isLoggedInSource.next(false);
      this.router.navigate(['/login']);
    });
  }

  SignUp(email, password) {
    return this.auth
      .createUserWithEmailAndPassword(email, password)
      .then(result => {
        window.alert('You have been successfully registered!');
        console.log(result.user);
      })
      .catch(error => {
        window.alert(error.message);
      });
  }
}
