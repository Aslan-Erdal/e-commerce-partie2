import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { OrderProduct, OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-total-panier',
  templateUrl: './total-panier.component.html',
  styleUrls: ['./total-panier.component.css']
})
export class TotalPanierComponent {

  private quantity: number = 0;

  public delivery_method: string | null = null;

  constructor(public cartService: CartService, private orderService: OrderService) { }

  ngOnInit(): void {
    this.cartService.getTotalPrice();
    this.cartService.getTotalQuantity();
    this.orderService.getOrder();

    const order = this.orderService.getOrder();
    console.log(order[0].id);

    console.log("DELIVERY_METHOD : ", this.delivery_method);


  }

  addProductOrder(products: OrderProduct) {

    if (!products) return;

    const orderProduct: OrderProduct = {
      id: 1,
      orderedProducts: {
        product: products,
        quantity: this.quantity
      },
      orderAddress: null,
      total : this.cartService.totalPrice,
      delivery_method: this.delivery_method,
      order_number: null
    }

    this.orderService.addProductOrder(orderProduct);

  }

  public changeDelivery(event: any) {

    if(event.target.value == 'Choisir') this.delivery_method = null;
    console.log(this.delivery_method);


    console.log("DELIVERY VALUE : ",event.target.value);

    this.delivery_method = event.target.value;

  }

  public preventToSwitch() {
    if(this.delivery_method == 'Choisir') return;
  }

  // public onColorChange(event: any, cartProduct: CartProduct) {
  //   console.log("Color : ", event.target.value);
  //   if(event.target.value == 'Couleur') return;
  //   this.cartService.changeColor(event.target.value, cartProduct);
  // }

}
