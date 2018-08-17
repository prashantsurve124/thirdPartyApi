import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CryptoCurreny } from '../../model/CryptoCurrency';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  result : any;
  constructor(private _http : Http ) { }

  getPrices() :Observable<any> {
    
    return this._http.get('https://api.coinmarketcap.com/v2/ticker/').pipe(map(result => this.result = result.json()));
     // .map(result => this.result = result.json());
  }

}
