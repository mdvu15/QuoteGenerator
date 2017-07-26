import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Quote } from './quote';

@Injectable()
export class QuoteService {
    constructor(private http: Http ) {};

    private params: URLSearchParams = new URLSearchParams();
    private quoteUrl = 'http://api.forismatic.com/api/1.0/';
    //private headers = new Headers()
    getQuote(): Promise<Quote> {
        this.params.set('method', 'getQuote');
        this.params.set('format', 'json');
        this.params.set('lang', 'en');
        //this.headers.append('Access-Control-Allow-Origin', '*');
        return this.http.get(this.quoteUrl, {
            search: this.params})
        .toPromise()
        .then(response => response.json().data as Quote);
    };
}