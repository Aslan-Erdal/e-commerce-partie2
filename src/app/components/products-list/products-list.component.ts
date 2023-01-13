import { Component, Input } from '@angular/core';
import { Product } from 'src/app/mocks/products.mock';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
  @Input() Products!: Product[];

  // products: Product[] = [];
  // newProducts: Product[] = [];
  // constructor(private serviceProducts: ProductsService) {}
  // ngOnInit() {
  //   this.newProducts = this.serviceProducts.getnewProducts();
  // }
}
