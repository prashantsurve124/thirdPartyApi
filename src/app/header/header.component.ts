import { Component, OnInit } from '@angular/core';
import { LocalStorageHelper } from '../common/LocalStorage';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _localStorage: LocalStorageHelper, private _router: Router) {

  }

  ngOnInit() {

  }

  logOut() {
    this._localStorage.deleteAuthToken("TOKEN");

  }

  isLoggedIn(): boolean {
    let token = this._localStorage.getAuthToken("TOKEN");
    if (token == "undefined" || token == null) {
      return false;
    }
    return true;
  }

}
