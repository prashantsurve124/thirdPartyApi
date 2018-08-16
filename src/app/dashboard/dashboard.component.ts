import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { CryptoCurreny } from '../../model/CryptoCurrency';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cryptoCurrency : CryptoCurreny[];
  rawCrypto ;

  constructor(private _data : DataService) { }

  ngOnInit() {
    this._data.getPrices()
      .subscribe(res => {
        console.log(res.data);
       this.rawCrypto = Object.keys(res.data).map(e =>res.data[e]);
       this.fillRenderObject(this.rawCrypto);
       console.log(this.cryptoCurrency);
      })

  }

  fillRenderObject(rawCrypto){
    for(var i = 0; i<this.rawCrypto; i++){
      for(var j = 0; j<7; j++){
        this.cryptoCurrency[j].id =this.rawCrypto[i].id;
        this.cryptoCurrency[j].name =this.rawCrypto[i].name;
        this.cryptoCurrency[j].symbol =this.rawCrypto[i].symbol;
        this.cryptoCurrency[j].max_supply =this.rawCrypto[i].max_supply;
        this.cryptoCurrency[j].total_supply =this.rawCrypto[i].total_supply;
        this.cryptoCurrency[j].rank =this.rawCrypto[i].rank;
        this.cryptoCurrency[j].quotes =this.rawCrypto[i].quotes;

      }
    }
  }

}
