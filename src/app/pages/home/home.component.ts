import { Component } from '@angular/core';
import { Product } from 'src/app/mocks/products.mock';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  Products: Product[] = [];
  constructor(private serviceProducts: ProductsService) {}
  
  ngOnInit() {
    this.Products = this.serviceProducts.getnewProducts();
  }
}
