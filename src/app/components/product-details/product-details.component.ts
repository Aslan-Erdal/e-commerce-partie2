import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/mocks/products.mock';
import { ProductsService } from 'src/app/service/products/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  product?: Product;
  constructor(
    private productService: ProductsService,
    private activatedRout: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    this.getProduct();
  }
  getProduct(): void {
    const id = Number(this.activatedRout.snapshot.paramMap.get('id'));
    const productFound = this.productService.getProductById(id);
    if (productFound) {
      this.product = productFound;
    } else {
      this.router.navigate(['not-found']);
    }
  }
}
