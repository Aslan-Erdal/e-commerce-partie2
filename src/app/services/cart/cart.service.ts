import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  public getCart() {

    const cart = localStorage.getItem("cart");

    if(cart) {
      return JSON.parse(cart);
    } else {
      this.createCart();
      this.getCart();
    }

  }

  private createCart() {

    const newCart = JSON.stringify([]);
    localStorage.setItem('cart', newCart);

  }

  private saveCart() {

  }

  public addProductToCart() {

  }

  public removeProductFromCart() {

  }

}
