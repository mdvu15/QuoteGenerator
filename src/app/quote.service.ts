import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Jsonp } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Quote } from './quote';

@Injectable()
export class QuoteService {
    constructor(private jsonp: Jsonp) {}

    private params: URLSearchParams = new URLSearchParams({
        method: 'getQuote',
        format: 'json',
        lang: 'en',
        jsonp: "JSONP_CALLBACK"
    });
    private quoteUrl = 'http://api.forismatic.com/api/1.0/';
    getQuote(): Promise<Quote> {
        return this.jsonp.get(this.quoteUrl, {
            search: this.params})
        .toPromise()
        .then(response => response.json().data as Quote)
        .catch(this.errorHandling);
    }

    private errorHandling(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}