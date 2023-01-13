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
    //pour ecouter se qui ce passe dans l'url pour faire charger les données
    //il faut faire les observateurs pour bien comprendre?!!!!!!
    this.activatedRout.params.subscribe((routeParams) => {
      this.getProduct();
    });
  }
  getProduct(): void {
    const productsFound = this.productsService.getProductJender(
      this.getCategorie()
    );
    if (productsFound) {
      this.Products = productsFound;
    } else {
      this.router.navigate(['not-found']);
    }
  }
  getCategorie(): string | null {
    const categories = this.activatedRout.snapshot.paramMap.get('categorie');
    console.log(categories);
    return categories;
  }
}
