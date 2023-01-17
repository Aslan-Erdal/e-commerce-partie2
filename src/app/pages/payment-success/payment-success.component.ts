import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrderProduct, OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.css']
})
export class PaymentSuccessComponent {
  public orderList!: OrderProduct;

  constructor(private orderService: OrderService, private router: Router) { }


ngOnInit(): void {
  this.initOrder();
  if(this.orderList?.orderAddress == undefined) this.router.navigate(['/cart'])
}

public initOrder(): any {
  const order = this.orderService.getOrder();
  this.orderList = order[0];
  return this.orderList;
}

}
