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

loginUser(data): Observable<any>{
  let url = 'https://reqres.in/api/login';
  let body = JSON.stringify(data);
  var header = new Headers();
        header.append('Access-Control-Allow-Origin', '*');
        header.append("Content-Type", "application/json");
        header.append("accept", "application/json");
  
        let options = new RequestOptions({ headers: header }); 

console.log("data:"+body);
return this._http.post(url, body, options).pipe(map(resp => resp.json()));
//return this._http.post(url,body,options).pipe(map((response) => response.json()))
}
 

   
}
