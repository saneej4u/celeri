import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private accountService: AccountService, private router: Router){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      console.log("Auth Guard");
      
      if(this.accountService.isLoggedIn !== true) 
      {
        console.log("Not Logged In");

        return false;

      }
      console.log("Logged In");
      return true;


    //  this.accountService.isLoggedIn$.subscribe(x => {

    //   if(x === true) 
    //   {
    //     console.log("Logged In");

    //     return false;

    //   }
    //   else
    //   {
    //     console.log("Not Logged In");
    //     return false;

    //   }

    //  }, (error) => {

    //  })

    //  return false;
  }
  
}
