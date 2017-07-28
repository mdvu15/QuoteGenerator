import { Component, OnInit } from '@angular/core';

import { WindowService } from './window.service';
import { QuoteService } from './quote.service';
import { Quote } from './quote';

@Component({
	selector: 'quote',
	templateUrl: './quote.component.html',
	styleUrls: ['./quote.component.css'],
    providers: [WindowService]
})

export class QuoteComponent implements OnInit {
    public quote: Quote;
    constructor(private quoteService: QuoteService,
                private nativeWindow: WindowService
                ) {}

    getQuote(): void {
        this.quoteService.getQuote().then(quote => this.quote = quote)
        .then(() => this.quote.quoteAuthor = this.quote.quoteAuthor === "" ? 
            "Unknown" : this.quote.quoteAuthor)
        //change author to Unknown if this.quote.quoteAuthor === ""
        .catch(error => {console.log(error)})
    }

    tweet(): void {
        this.nativeWindow.getWindow()//return window object
        .open(`https://twitter.com/intent/tweet?text="${this.quote.quoteText}" - ${this.quote.quoteAuthor}`);
    }

    ngOnInit(): void {
        this.getQuote();
    }
}