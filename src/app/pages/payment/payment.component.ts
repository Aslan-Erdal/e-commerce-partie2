import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderProduct, OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  orderPayment!: OrderProduct;

  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit(): void {
    this.initOrder();
    console.log("ORZDSFSDFSDF ; ", this.orderPayment);

  }

  public initOrder() {
    const order = this.orderService.getOrder();
    if(order.length == 0) this.router.navigate(['/cart']);
    this.orderPayment = order[0];
  }

}
