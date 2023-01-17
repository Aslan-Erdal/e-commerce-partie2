import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DeliveryAddress, OrderProduct, OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-delivery-address',
  templateUrl: './delivery-address.component.html',
  styleUrls: ['./delivery-address.component.css']
})
export class DeliveryAddressComponent implements OnInit {
  public paymentForm!: FormGroup;
  public validationErrors: string[] = [];
  public dataFromStorage: any;
  public orderAddress!: DeliveryAddress;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public orderService: OrderService ) { }

  ngOnInit(): void {
     this.sendDeliveryAddress();

     this.initOrder();

  }

  public sendDeliveryAddress() {
    this.paymentForm = this.formBuilder.group({
      delivery_prenom: [null, [Validators.required, Validators.minLength(3)]],
      delivery_nom: [null, [Validators.required, Validators.minLength(3)]],
      delivery_portable: [null, [Validators.required, Validators.minLength(10)]],
      delivery_email: [null, [Validators.required, Validators.email]],
      delivery_address: [null, [Validators.required]],
      delivery_pays: [null, [Validators.required, Validators.minLength(4)]],
    });
  }

  public initOrder() {
    const orderProduct = this.orderService.getOrder();

     this.orderAddress = orderProduct[0].orderAddress;

     console.log("ORDER : ", this.orderAddress);
  }



  public getDeliveryAddress() {
    this.validationErrors = [];
    const order = this.orderService.getOrder();

    const existingOrder = order.find((product: OrderProduct) => product.id === 1);

    console.log(this.paymentForm.controls);

    if (this.paymentForm.invalid) {
      return;
      // Object.keys(this.paymentForm.controls).forEach(control => {
      //   const currentInput = this.paymentForm.get(control);
      //   if(currentInput && currentInput.status === "INVALID") {
      //     this.validationErrors.push(control);
      //   }
      //   console.log(control, currentInput);
      // });
    } else {
      console.log(this.paymentForm.value);
      console.log(existingOrder);

      if(existingOrder) {
        const orderId = order.indexOf(existingOrder);
      order[orderId].orderAddress = this.paymentForm.value;
      console.log("ORDER ID : ", order[orderId].orderAddress);
      }
      this.orderService.saveOrder(order);
      this.orderService.getOrder();
      this.initOrder();
    //  this.router.navigate(['/payment']).then(() => {
    //   window.location.reload();
    // });
    }
  }

  // -------------------------------------------------->

  isValidInput(fieldName: string): boolean {
    return (
      this.paymentForm.controls[fieldName].invalid  &&
      (this.paymentForm.controls[fieldName].dirty ||
        this.paymentForm.controls[fieldName].touched)
    );
  }


  get prenom() { return this.paymentForm.get('delivery_prenom')!.errors; }
  get nom() { return this.paymentForm.get('delivery_nom')!.errors; }
  get portable() { return this.paymentForm.get('delivery_portable')!.errors; }
  get email() { return this.paymentForm.get('delivery_email')!.errors; }
  get address() { return this.paymentForm.get('delivery_address')!.errors; }
  get pays() { return this.paymentForm.get('delivery_pays')!.errors; }

}
