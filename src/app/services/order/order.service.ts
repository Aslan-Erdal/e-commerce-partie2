import { Injectable } from '@angular/core';
import { Address, Product } from 'src/app/mocks/products.mock';
import { CartProduct, CartService } from '../cart/cart.service';

export interface DeliveryAddress {
  delivery_prenom: string,
  delivery_nom: string,
  delivery_portable: string,
  delivery_email: string,
  delivery_address: string,
  delivery_pays: string,
}

export interface OrderProduct {
  id: number,
  orderedProducts: any,
  orderAddress?: DeliveryAddress | null,
  total: number,
  delivery_method: string | null,
  order_number: string | null,
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private cartService: CartService) { }

  public getOrder() {

    const order = localStorage.getItem("order");

    if(order) {
      return JSON.parse(order);
    } else {
      this.createOrder();
      this.getOrder();
    }
  }

  private createOrder() {
    const newOrder: [] = [];
    const stringifyOrder = JSON.stringify(newOrder);
    localStorage.setItem('order', stringifyOrder);
  }

  public saveOrder(order: OrderProduct) {
    localStorage.setItem('order', JSON.stringify(order));
  }


  public addProductOrder(orderProduct: OrderProduct) {

    const order = this.getOrder();

    const existingProduct = order.find((product: OrderProduct) => product.id === orderProduct.id);

    if(existingProduct) {
      return;
    } else {
      order.push(orderProduct);
    }
    this.saveOrder(order);
    this.getOrder();
  }

  public applyReduction(orderProduct: OrderProduct) {
    
  }

}
