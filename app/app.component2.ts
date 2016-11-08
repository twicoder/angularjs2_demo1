
import { Component } from '@angular/core';


@Component ({
    selector:'pm-app2',
    template: `
        <div><h1>{{pageTitle}}</h1>
            <div>My First Component</div>
        </div>
    `
})
export class AppComponent2 {
    pageTitle:string = `Acme Product Management`;
}



