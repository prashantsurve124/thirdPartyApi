export class CryptoCurreny {
    
id : number;
name : string;
symbol : string;
rank : number;
total_supply : number;
max_supply : number;
quotes : Quotes;

}

export class Quotes {

    price : number;
    market_cap : number;
    percent_change_1h : number;
    percent_change_24h : number;
    percent_change_7d : number;

}