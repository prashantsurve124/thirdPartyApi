import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ng2-localstorage/dist';

@Injectable()
export class LocalStorageHelper {

    constructor(private _localStorage : LocalStorageService){

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

    deleteAuthToken() {
        this.USER_AUTH_TOKEN = null;
    }
}