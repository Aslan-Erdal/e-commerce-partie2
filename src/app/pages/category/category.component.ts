import { Component } from '@angular/core';
import { Product } from 'src/app/mocks/products.mock';
import { ProductsService } from 'src/app/service/products/products.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  products: Product[] = [];

  constructor (private ProductService : ProductsService){}

  ngOnInit(){
    this.products = this.ProductService.getProducts();
  
  }

}
