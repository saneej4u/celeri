import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/model/user';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  user: User;
  userFormGroup: FormGroup;

  constructor(private fb: FormBuilder, private accountService: AccountService, private router: Router) {}

  ngOnInit(): void {
    this.userFormGroup = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      gdcNumber: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  onSignUp() {
    console.log(this.userFormGroup.get('firstName').value);

    this.accountService.SignUp("saneej@gmail.com", "test12345"); 
  }

  onLoginRequested()
  {
    this.router.navigate(['/login'])
  }

  onSignUpSuccess()
  {
    this.accountService.OnSignUpSuccess();
    console.log("Register sucess");
  }
}
