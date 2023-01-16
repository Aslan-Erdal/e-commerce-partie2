import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/mocks/products.mock';
import { CartProduct, CartService } from 'src/app/services/cart/cart.service';
import { FavorisProduct, FavorisService } from 'src/app/services/favoris/favoris.service';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  product!: Product;
  quantity: number = 1;
  constructor(
    private productsService: ProductsService,
    private activatedRout: ActivatedRoute,
    private router: Router,
    private cartService: CartService,
    private favorisService: FavorisService,
  ) {}
  ngOnInit() {
    this.getProduct();
  }
  getProduct(): void {
    const id = Number(this.activatedRout.snapshot.paramMap.get('id'));

    const productFound = this.productsService.getProductById(id);
    if (productFound) {
      this.product = productFound;
    } else {
      this.router.navigate(['not-found']);
    }
  }
 // method for adding a product to CART (created by erdal)
  addToCart() {

    if (!this.product) return;

    const cartProduct: CartProduct = {
      product: this.product,
      quantity: this.quantity,
    }
    this.cartService.addProductToCart(cartProduct);
  }

  public addToFavorite(event: Event, item: Product): void {
    event.stopPropagation();
    if (!item) return;
    const favorisProduct: FavorisProduct = {
      product: item,
    }
    this.favorisService.addProductToFavoris(favorisProduct);
}

public isInFavorite(item: Product): boolean {
  this.favorisService.getFavoris();

  const favorisProduct: FavorisProduct = {
    product: item,
  }

  return this.favorisService.existsInFavoris(favorisProduct);
}

}
