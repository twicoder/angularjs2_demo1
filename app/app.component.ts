import { Component } from '@angular/core';
 

@Component({
    selector: 'pm-app',
    template: `
        <div>
            <pm-products></pm-products>
        </div>
    `
})
export class AppComponent {
    getTitle():string {
        return 'This is the returned title!';
    }
 }
