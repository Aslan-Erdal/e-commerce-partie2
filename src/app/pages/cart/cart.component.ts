import { Component, OnInit } from '@angular/core';
import { CartProduct, CartService } from 'src/app/services/cart/cart.service';
import { FavorisProduct, FavorisService } from 'src/app/services/favoris/favoris.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public currentCartProduct: CartProduct[] = [];
  public currentFavorisProduct: FavorisProduct[] = [];

  constructor(private cartService: CartService, private favorisService: FavorisService) { }

  ngOnInit(): void {
    this.getNewCart();
    this.getNewFavoris();
  }

  getNewCart() {
    this.currentCartProduct = this.cartService.getCart();
  }
  getNewFavoris() {
    this.currentFavorisProduct = this.favorisService.getFavoris();
  }

  removeProduct(index: number) {
    this.cartService.removeProductFromCart(index);
    this.getNewCart();
  }

}
