import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/mocks/products.mock';
import { CartProduct, CartService } from 'src/app/services/cart/cart.service';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  productsPromos: Product[] = [];
  quantity: number = 1;

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private cartService: CartService,
  ) {}
  ngOnInit() {
    this.getProductsPromos();
    // console.log('tous les produit', this.productsService.getProducts());
    this.carouselAnimate();
  }

  getProductsPromos(): void {
    const productsFound = this.productsService.getPromos();
    if (productsFound) {
      this.productsPromos = productsFound;
    } else {
      this.router.navigate(['not-found']);
    }
  }

  // getPrixPromos() {
  //   this.productsService.getPrixPromos();
  // }

  carouselAnimate() {
    const productContainers = document.querySelectorAll('.product-container');
    const productContainersArray =
      Array.prototype.slice.call(productContainers);
    const nxtBtn = document.querySelectorAll('.nxt-btn');
    const nxtBtnArray = Array.prototype.slice.call(nxtBtn);
    const preBtn = document.querySelectorAll('.pre-btn');
    const preBtnArray = Array.prototype.slice.call(preBtn);

    productContainersArray.forEach((item, i) => {
      let containerDimensions = item.getBoundingClientRect();
      let containerWidth = containerDimensions.width / 2;
      nxtBtnArray[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
      });

      preBtnArray[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
      });
    });
  }


  // method for adding a product to CART (created by erdal)
  addToCart(item: Product) {

    if (!item) return;

    const cartProduct: CartProduct = {
      product: item,
      quantity: this.quantity,
    }
    this.cartService.addProductToCart(cartProduct);
  }

}
