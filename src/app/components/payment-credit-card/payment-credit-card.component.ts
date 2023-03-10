import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DeliveryAddress, OrderProduct, OrderService } from 'src/app/services/order/order.service';
import * as shortUUID from 'short-uuid';

@Component({
  selector: 'app-payment-credit-card',
  templateUrl: './payment-credit-card.component.html',
  styleUrls: ['./payment-credit-card.component.css']
})
export class PaymentCreditCardComponent implements OnInit{
  public cardForm!: FormGroup;
  public errorPayMessage!: string;
  public months = ['Mois', '01','02', '03','04', '05', '06', '07', '08', '09', '10', '11', '12',];
  public years = ['Année', '2023', '2024', '2025', '2026', '2027', '2028', '2029',];
  public orderAddress!: DeliveryAddress;
  public delivery_orderID = shortUUID.generate();


  constructor(private formBuilder: FormBuilder, private router: Router, private orderService: OrderService) { }

  ngOnInit(): void {
    this.initCardForm();

    this.initAddress();

  }

  public initCardForm() {
    this.cardForm = this.formBuilder.group({
      num_card: [null, [Validators.required]],
      month: [this.months[0], [Validators.required]],
      year: [this.years[0], [Validators.required]],
      cvv: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
    });
  }

  public initAddress() {
    const orderProduct = this.orderService.getOrder();

    this.orderAddress = orderProduct[0].orderAddress;

    return this.orderAddress;
  }

  public onPay(): void  {
    const order = this.orderService.getOrder();

    const existingOrder = order.find((product: OrderProduct) => product.id === 1);

    if(this.cardForm.invalid) {
      this.errorPayMessage = "Veuillez renseigner tous les champs!";
    } else {
      this.errorPayMessage = "";
      if(existingOrder){
        const orderId = order.indexOf(existingOrder);
      order[orderId].order_number = this.delivery_orderID;
      console.log("ORDER ID : ", order[orderId].orderAddress);
      }
      this.orderService.saveOrder(order);
      localStorage.removeItem('cart');
      setTimeout(() => {
        this.router.navigate(['/payment-success'])
        .then(() => { window.location.reload();});
      }, 1500);
    }
  }

  isValidInput(fieldName: string): boolean {
    return (
      this.cardForm.controls[fieldName].invalid  &&
      (this.cardForm.controls[fieldName].dirty ||
        this.cardForm.controls[fieldName].touched)
    );
  }

  get num_card() { return this.cardForm.get('num_card')!.errors; }
  get month() { return this.cardForm.get('month')!.errors; }
  get year() { return this.cardForm.get('year')!.errors; }
  get cvv() { return this.cardForm.get('cvv')!.errors; }

}
