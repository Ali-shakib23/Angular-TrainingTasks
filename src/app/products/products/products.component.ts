import { Component, Input} from '@angular/core';
import {IProduct} from '../../models/IProduct';
@Component({
  selector: 'app-products',
  standalone: false,
  
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  @Input({required:true}) product : IProduct;

}
