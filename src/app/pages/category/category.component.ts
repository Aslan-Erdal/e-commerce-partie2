import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/mocks/products.mock';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  Products: Product[] = [];
  constructor(
    private productsService: ProductsService,
    private activateRout: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.getProduct();
  }

  getProduct(): void {
    const productsFound = this.productsService.getProductJenderCategorie(
      this.getCategorie(),
      this.getSousCategorie()
    );
    console.log(productsFound);
    if (productsFound) {
      this.Products = productsFound;
    } else {
      this.router.navigate(['not-found']);
    }
  }

  getSousCategorie(): string | null {
    const sousCategories =
      this.activateRout.snapshot.paramMap.get('sousCategorie');
    console.log('souscategories', sousCategories);

    return sousCategories;
  }

  getCategorie(): string | null {
    const categories = this.router.url.split('/')[2];
    console.log('categories', categories);

    return categories;
  }
}
