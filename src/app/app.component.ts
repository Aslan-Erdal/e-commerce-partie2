import { Component } from '@angular/core';
import { Product, PRODUCTS } from './mocks/products.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'e-commerce-partie2';
  Products!: Product[];

  search(newKey: string) {
    const searchProducts = PRODUCTS.filter(
      (product) =>
        product.categorie.includes(newKey) ||
        product.sousCategorie.includes(newKey)
    );
    console.log(searchProducts);
    this.Products = searchProducts;
    return this.Products;
  }
}
