import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent }  from './app.component';
import { AppComponent2 }  from './app.component2';
import { ProductListComponent } from './products/product-list.component'

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule
   ],
  declarations: [ AppComponent,ProductListComponent ],
  bootstrap: [ AppComponent]
})
export class AppModule { }
