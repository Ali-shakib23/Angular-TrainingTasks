import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products/products.component';
import { AddProductsComponent } from './add-products/add-products/add-products.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from  '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AddProductsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
