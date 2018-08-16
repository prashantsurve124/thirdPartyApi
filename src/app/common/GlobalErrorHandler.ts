import { ErrorHandler, Injectable } from "@angular/core";

@Injectable()
export class GlobalErrorHandler extends  ErrorHandler {

    constructor(){
        super()
    }
}