import { Component } from '@angular/core';
import { Product } from 'src/app/mocks/products.mock';
import { CartProduct, CartService } from 'src/app/services/cart/cart.service';
import { OrderProduct, OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-article-payment',
  templateUrl: './article-payment.component.html',
  styleUrls: ['./article-payment.component.css']
})
export class ArticlePaymentComponent {
  public articles!: OrderProduct;


  constructor(public orderService: OrderService) { }

  ngOnInit(): void {
    this.getProductsFromCart();
    console.log("ARTICLE : ", this.articles);

  }

  getProductsFromCart() {

    const order = this.orderService.getOrder();

    this.articles = order[0];

    return this.articles;

  }

}
