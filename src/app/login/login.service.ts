import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, RequestOptions, Headers } from '@angular/http';
import { map} from 'rxjs/operators';

import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _httpClient : HttpClient, private _http : Http) {

   }

loginUser(body): Observable<any>{
  var header = new Headers();
  header.append('Access-Control-Allow-Origin', '*');
        header.append("Content-Type", "application/json");
        header.append("accept", "application/json");
        let options = new RequestOptions({ headers: header }); 
let url = 'https://reqres.in/api/login';
let data = JSON.stringify(body);
console.log("data:"+data);
return this._http.post(url, data, options).pipe(map(resp => resp.json));
}
 

   
}
