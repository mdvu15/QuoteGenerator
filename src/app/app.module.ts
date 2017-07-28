import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http'; 

import { AppComponent } from './app.component';
import { QuoteComponent } from './quote.component';

import { QuoteService } from './quote.service';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule
  ],
  providers: [QuoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
