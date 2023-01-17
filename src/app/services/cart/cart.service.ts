import { Injectable } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { Product } from 'src/app/mocks/products.mock';
import { ProductsService } from 'src/app/services/products/products.service';

export interface CartProduct {
  product: Product,
  quantity: number,
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public totalPrice: number = 0;

  public productQuantity: number = 0;

  constructor(private productService: ProductsService, private toastService: HotToastService) { }

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
    const newCart: [] = [];
    const stringifyBasket = JSON.stringify(newCart);
    localStorage.setItem('cart', stringifyBasket);
  }

  private saveCart(cart: CartProduct) {
    localStorage.setItem('cart', JSON.stringify(cart));
    this.getTotalPrice();
  }

  public addProductToCart(cartProduct: CartProduct) {
    const cart = this.getCart();

    const existingProduct = cart.find((product: CartProduct) => product.product.id === cartProduct.product.id);
    if(existingProduct) {
      const cartProductId = cart.indexOf(existingProduct);
      cart[cartProductId].quantity += cartProduct.quantity;
      console.log(cart[cartProductId]);
    } else {
      cart.push(cartProduct);
      const adding = this.toastService.success(`${cartProduct.product.name} a été ajouté au panier!`, {
        position: 'top-center',
        autoClose: true,
        dismissible: true,
      });
      setTimeout(() => {
        adding.close();
      }, 1500);
    }
    this.saveCart(cart);
    this.getTotalQuantity();
  }

  public removeProductFromCart(index: number) {
    const cart = this.getCart();
    cart.splice(index, 1);
    this.saveCart(cart);
    this.getTotalQuantity();
      const remove = this.toastService.success('Le produit a été supprimé du panier!!', {
        position: 'top-center',
        autoClose: true,
        dismissible: true,
      });
      setTimeout(() => {
        remove.close();
      }, 1500);
  }

  public getTotalPrice(): void {
    const cart = this.getCart();

    const total = cart.reduce((accumulator: number, currentValue: CartProduct) => {
      const product = this.productService.getProductById(currentValue.product.id);

      if (!product) return accumulator;

      return accumulator + (currentValue.quantity * product.price);
    }, 0);

     this.totalPrice = total;

  }


  public getTotalQuantity(): void {

    const cart = this.getCart();

    const total = cart.reduce((accumulator: number, currentValue: CartProduct) => {
      return accumulator += currentValue.quantity;
    }, 0);

    this.productQuantity = total;
  }

  // TODO
  public emptyCart() {

  }

  public changeQuantity(qty: number, cartProduct: CartProduct) {
    const cart = this.getCart();

    const existingProduct = cart.find((product: CartProduct) => product.product.id === cartProduct.product.id);
    if(existingProduct) {
      const cartProductId = cart.indexOf(existingProduct);
      cart[cartProductId].quantity = qty;
      console.log(cart[cartProductId]);
    } else {
      cart.push(cartProduct);
    }
    this.saveCart(cart);
    this.getTotalQuantity();
  }

  public changeColor(color: string, cartProduct: CartProduct) {
    const cart = this.getCart();

    const existingProduct = cart.find((product: CartProduct) => product.product.id === cartProduct.product.id);

    if(existingProduct) {
      existingProduct.product.couleur[0] = color;
      console.log("EXISTING : ", existingProduct.product);
    } else {
      cart.push(cartProduct);
    }
    this.saveCart(cart);
    this.getTotalQuantity();
  }

  public changeSize(size: string, cartProduct: CartProduct) {
    const cart = this.getCart();

    const existingProduct = cart.find((product: CartProduct) => product.product.id === cartProduct.product.id);

    if(existingProduct) {
      existingProduct.product.taille[0] = size;
      console.log("EXISTING : ", existingProduct.product);
    } else {
      cart.push(cartProduct);
    }
    this.saveCart(cart);
    this.getTotalQuantity();
  }

}
