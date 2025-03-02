import { Component } from '@angular/core';
import { PRODUCTS } from './db-data';
import { IProduct } from './models/IProduct';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ecommerce-task';

  Products = [];
  

  onCreateProduct(product: IProduct){
    if (!product) {
      console.error('Error: Received undefined product!');
      return;
    }
    this.Products.push(product);
    console.log('Received Product:', product);
  }
}
