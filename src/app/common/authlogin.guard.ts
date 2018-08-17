import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageHelper } from './LocalStorage';

@Injectable({
  providedIn: 'root'
})
export class AuthloginGuard implements CanActivate {

  constructor(private _localStorage: LocalStorageHelper, private router: Router ) {

  }


  canActivate() {
    let token = this._localStorage.getAuthToken("TOKEN");
    if (token != null) {
      this.router.navigate(['/dashboard']);
      return false;
    }
    else {
    return true;
    }
  }
}
