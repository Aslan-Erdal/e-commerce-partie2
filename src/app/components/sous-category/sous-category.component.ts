import { Component } from '@angular/core';
import { Product } from 'src/app/mocks/products.mock';
import { ProductsService } from 'src/app/services/products/products.service';


@Component({
  selector: 'app-sous-category',
  templateUrl: './sous-category.component.html',
  styleUrls: ['./sous-category.component.css']
})
export class SousCategoryComponent {
  products : Product [] = [];

  constructor (private ProductService : ProductsService) {}

  ngOnInit(){
    this.products = this.ProductService.getProducts();
  }

}
