import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delivery-address',
  templateUrl: './delivery-address.component.html',
  styleUrls: ['./delivery-address.component.css']
})
export class DeliveryAddressComponent implements OnInit {
  public paymentForm!: FormGroup;
  public validationErrors: string[] = [];

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.sendDeliveryAddress();
  }


  public sendDeliveryAddress() {
    this.paymentForm = this.formBuilder.group({
      delivery_prenom: [null, [Validators.required, Validators.minLength(3)]],
      delivery_nom: [null, [Validators.required]],
      delivery_portable: [null, [Validators.required, Validators.minLength(10)]],
      delivery_email: [null, [Validators.required, Validators.email]],
      delivery_address: [null, [Validators.required]],
      delivery_pays: [null, [Validators.required]],
    });
  }



  public getDeliveryAddress() {
    this.validationErrors = [];

    console.log(this.paymentForm.controls);

    if (this.paymentForm.invalid) {
      Object.keys(this.paymentForm.controls).forEach(control => {
        const currentInput = this.paymentForm.get(control);
        if(currentInput && currentInput.status === "INVALID") {
          this.validationErrors.push(control);
        }

        console.log(control, currentInput);
      });
    } else {
      this.router.navigate(['/payment-success']);
    }
  }



  isValidInput(fieldName: string): boolean {
    return (
      this.paymentForm.controls[fieldName].invalid  &&
      (this.paymentForm.controls[fieldName].dirty ||
        this.paymentForm.controls[fieldName].touched)
    );
  }




}
