import { Component, OnInit } from '@angular/core';

import { WindowService } from './window.service';
import { QuoteService } from './quote.service';
import { Quote } from './quote';

@Component({
	selector: 'quote',
	templateUrl: './quote.component.html',
	//styleUrls: ['./quote.component.css']
    providers: [WindowService]
})

export class QuoteComponent implements OnInit {
    public quote: Quote;
    constructor(private quoteService: QuoteService,
                private nativeWindow: WindowService
                ) {}

    getQuote(): void {
        this.quoteService.getQuote().then(quote => this.quote = quote);
        if (this.quote.quoteAuthor === "") {
            this.quote.quoteAuthor = "Unknown";
        }
    } 

    shareTwitter(): void {
        this.nativeWindow.getWindow()
        .open(`https://twitter.com/intent/tweet?text=${this.quote.quoteText}-${this.quote.quoteAuthor}`);
    }

    ngOnInit(): void {
        this.getQuote();
    }
}