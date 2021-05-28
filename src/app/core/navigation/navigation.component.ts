import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/account/account.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  isLoggedIn: boolean;

  constructor(private accountService:  AccountService) { }

  ngOnInit(): void {
  //  this.accountService.isLoggedIn$.subscribe(x => {
  //    this.isLoggedIn = x
  //    console.log(" Navigation Is Logged In: " + this.isLoggedIn);
  //   }, () => {});

  this.isLoggedIn = true;
  }

  OnSignOut()
  {
    this.accountService.SignOut();
  }

}
