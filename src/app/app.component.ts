import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <div style="text-align:center">
        <h1> Welcome to {{title}}! </h1>
    </div>
    <div>
        <quote></quote>
    </div>
    `,
    styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quote generator';
}
