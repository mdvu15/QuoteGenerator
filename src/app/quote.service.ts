import { Injectable } from '@angular/core';
import { Http, Jsonp } from '@angular/http';
//jsonp is used to bypass cross-origin request sharing (CORS) restriction 
//for json request on different domains (cannot use html)
import 'rxjs/add/operator/toPromise';

import { Quote } from './quote';

@Injectable()
export class QuoteService {
    constructor(private jsonp: Jsonp) {}

    private quoteUrl = `http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=JSONP_CALLBACK`;
    //JSONP_CALLBACK = default callback function to handle jsonp result
    getQuote(): Promise<Quote> {
        return this.jsonp.get(this.quoteUrl)
        .toPromise()
        .then(response => response.json() as Quote)
        .catch(this.errorHandling);
    }

    private errorHandling(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}