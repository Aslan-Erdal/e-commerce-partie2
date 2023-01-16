import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CartService } from 'src/app/services/cart/cart.service';
import { OrderProduct, OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-total-panier',
  templateUrl: './total-panier.component.html',
  styleUrls: ['./total-panier.component.css']
})
export class TotalPanierComponent {
  public delivery_form!: FormGroup;

  private quantity: number = 0;

  constructor(public cartService: CartService, private orderService: OrderService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.cartService.getTotalPrice();
    this.cartService.getTotalQuantity();
    this.orderService.getOrder();

    const order = this.orderService.getOrder();
    console.log(order[0].id);

  }

  addDeliveryMethod() {
    this.delivery_form = this.formBuilder.group({
      
    });
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
      delivery_method: null,
      order_number: null
    }

    this.orderService.addProductOrder(orderProduct);

  }

  // public onColorChange(event: any, cartProduct: CartProduct) {
  //   console.log("Color : ", event.target.value);
  //   if(event.target.value == 'Couleur') return;
  //   this.cartService.changeColor(event.target.value, cartProduct);
  // }

}
