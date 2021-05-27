import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private auth: AngularFireAuth) { }

  SignUp(email, password) {
    return this.auth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        window.alert("You have been successfully registered!");
        console.log(result.user)
      }).catch((error) => {
        window.alert(error.message)
      })
  }
}
