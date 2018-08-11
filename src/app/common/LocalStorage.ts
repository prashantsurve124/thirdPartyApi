import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ng2-localstorage';

@Injectable()
export class LocalStorageHelper {

    constructor(private _localStorage : LocalStorageService){

    }
    USER_AUTH_TOKEN : string;

    setAuthToken(key : any, value : any){
        this._localStorage.set(key, value);
    }

    getAuthToken(key : any) {
        if(this._localStorage.get(key) != null)
            return this._localStorage.get(key);
        return null;
    }
}