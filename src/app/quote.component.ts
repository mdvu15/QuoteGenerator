import { Component, OnInit } from '@angular/core';

import { Quote } from './quote';

@Component({
	selector: 'quote',
	templateUrl: './quote.component.html',
	//styleUrls: ['./quote.component.css']
})

export class QuoteComponent {
    newQuote = new Quote();

    getQuote(): void {
        this.newQuote.content = "Deep";
    }
}