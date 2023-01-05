import { Component } from '@angular/core';
import * as shortUUID from 'short-uuid';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.css']
})
export class PaymentSuccessComponent {

  constructor() { }

public myId = shortUUID.generate();

ngOnInit(): void {
  console.log(this.myId);
}

}
