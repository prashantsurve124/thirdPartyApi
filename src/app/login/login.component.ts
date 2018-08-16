import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { LocalStorageHelper } from '../common/LocalStorage';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform1 : FormGroup;

  constructor(private fromBuilder : FormBuilder, 
              private _login : LoginService, 
              private _router : Router, 
              private _localStorageHelper : LocalStorageHelper) { 

        this.loginform1 = this.fromBuilder.group({'email' : ['', [Validators.required, Validators.email]],
                                                  'password' : ['', [Validators.required]]});
              }

  ngOnInit() {
    
  }


  submit(body :any) {
   this._login.loginUser(body).subscribe(resp => {
    console.log(resp);
    this._localStorageHelper.setAuthToken("TOKEN",resp.token);
    this._router.navigateByUrl('users');
    console.log(this._localStorageHelper.getAuthToken("TOKEN"));

   })
  }
}
