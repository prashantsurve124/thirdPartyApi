import { Component, OnInit } from '@angular/core';
import { LocalStorageHelper } from '../common/LocalStorage';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _local_storage : LocalStorageHelper, private _router : Router) {

   }

  ngOnInit() {
    
  }

  logOut() {
    this._local_storage.deleteAuthToken();
  
  }
}
