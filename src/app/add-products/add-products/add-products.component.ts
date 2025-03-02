import { Component, EventEmitter, Output } from '@angular/core';
import { IProduct } from '../../models/IProduct';

@Component({
  selector: 'app-add-products',
  standalone: false,
  
  templateUrl: './add-products.component.html',
  styleUrl: './add-products.component.scss'
})
export class AddProductsComponent {
  @Output() AddedProducts = new EventEmitter<IProduct>();
  

  product: IProduct = {
    name: '',
    price: 0,
    description: '',
  };


  onAddProduct(){
    console.log('Before Emitting:', this.product);
    if (!this.product.name || !this.product.price || !this.product.description) {
      console.error('Missing product details!');
      return;
    }

    console.log('Emitting product:', this.product); // Debugging

    this.AddedProducts.emit({ ...this.product });

    // Reset fields after emitting
    this.product = {
      name: '',
      price: 0,
      description: '',
     
    };
  }
  }

