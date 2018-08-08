export class User{
    text : number;
    name : string;
    username : string;
    email : string;
    phone : string;
    website : string;
    address : Address;
    company : Company;
}

export class Address{
    street : string;
    suite : string;
    city : string;
    zipcode : string;
    geo : Geo;
}

export class Geo{
    lat : string;
    lng : string;
}

export class Company{
    name : string;
    catchPhrase : string;
    bs : string;
}