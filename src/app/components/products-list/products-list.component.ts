import { Component } from '@angular/core';
import { Product } from 'src/app/mocks/products.mock';
import { ProductsService } from 'src/app/service/products/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
  products: Product[] = [];
  newProducts: Product[] = [];
  constructor(private serviceProducts: ProductsService) {}
  ngOnInit() {
    this.products = this.serviceProducts.getProducts();

    this.newProducts = this.serviceProducts.getnewProducts();
  }
}
