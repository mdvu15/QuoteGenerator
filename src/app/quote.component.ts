import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/core';
import { NgStyle } from '@angular/common';
//import ngStyle to modify dynamic CSS
import { WindowService } from './window.service';
import { QuoteService } from './quote.service';
import { Quote } from './quote';

@Component({
	selector: 'quote',
	templateUrl: './quote.component.html',
	styleUrls: ['./quote.component.css'],
    providers: [WindowService],
    /* animations: [
        trigger('changeColor', [
            state('one', style({
                'background-color': '*',
                'color': '*' 
            })),
            state('two', style({
                'background-color': '*',
                'color': '*'
            })),
            transition('one <=> two', animate('1000ms ease-in-out'))
            ]
        )
    ] */
})

export class QuoteComponent implements OnInit {
    private color: any;
    private colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
    public quote: Quote;
    //public state: string = "one";
    constructor(private quoteService: QuoteService,
                private nativeWindow: WindowService,
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

    /* toggleState(): void {
        this.state = (this.state === "one" ? "two" : "one");
    } //toggle between two states once the button is clicked
      //use for animation */

    getColor() {
        var index = Math.floor(Math.random() * this.colors.length);
        this.color = this.colors[index];
    } //set the current color to a random color from the list 

    ngOnInit(): void {
        this.getQuote(); //get quote upon intialization
        this.getColor(); //new random color upon intialization
    }
}