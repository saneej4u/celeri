import { Component, OnInit } from '@angular/core';
import { AuthProvider } from 'ngx-auth-firebaseui';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  providers = AuthProvider;
  message: string = 'Hello';
  errorMessage: string = 'errorMessage';
  constructor(private route: Router, private accountService: AccountService) {}

  reset:boolean = true;
  ngOnInit(): void {}

  saveUser(event: Event) {
     this.route.navigate(['/dentist/home']);
  }

  handleError(event) {

  }

  onCreateAccountRequested()
  {
    this.route.navigate(['/signup']);
  }

  onLoginButtonClicked()
  {
    console.log("onLoginButtonClicked")
   
  }

  onSuccess()
  {
    console.log("onSucess");
  
    this.accountService.OnLoggedInSuccess();
  
  }

  onError()
  {
    console.log("onError");
    this.accountService.OnLogInFailed();
  }
}
