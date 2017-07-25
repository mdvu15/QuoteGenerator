import { Component, OnInit } from '@angular/core';

import { QuoteService } from './quote.service'
import { Quote } from './quote';

@Component({
	selector: 'quote',
	templateUrl: './quote.component.html',
	//styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {
    quote: Quote;

    constructor(private quoteService: QuoteService) {}

    getQuote(): void {
        
    }
}