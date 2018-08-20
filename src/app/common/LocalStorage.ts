import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ng2-localstorage/dist';
import { Router } from '@angular/router';

@Injectable()
export class LocalStorageHelper {

    constructor(private _localStorage : LocalStorageService, private _router : Router){

    }
    USER_AUTH_TOKEN : string;

    setAuthToken(key : any, value : any){
        this._localStorage.set(key, JSON.stringify(value));
    }

    getAuthToken(key : any) {
        if(this._localStorage.get(key) != null)
            return this._localStorage.get(key);
        return null;
    }

    deleteAuthToken(key : any) {
        console.log("Logout user");
        this._localStorage.remove(key);
        console.log("TOKEN : " + this._localStorage.get(key));
        this._router.navigate(['/login']);
    }
}