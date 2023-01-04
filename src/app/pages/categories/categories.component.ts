import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/mocks/products.mock';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  Products: Product[] = [];
  constructor(
    private productsService: ProductsService,
    private activatedRout: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    this.getProduct();
  }
  getProduct(): void {
    const categories = this.router.url.substring(1);
    console.log(categories);

    const productsFound = this.productsService.getProductJender(categories);
    console.log(productsFound);
    if (productsFound) {
      this.Products = productsFound;
    } else {
      this.router.navigate(['not-found']);
    }
  }
}
