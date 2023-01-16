import { Component } from '@angular/core';
import { Product } from './mocks/products.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'e-commerce-partie2';
  productsSearch!: Product[];
  addsearch(products: object) {
    console.log(products);
  }
}
