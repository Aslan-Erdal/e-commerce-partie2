import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-credit-card',
  templateUrl: './payment-credit-card.component.html',
  styleUrls: ['./payment-credit-card.component.css']
})
export class PaymentCreditCardComponent implements OnInit{
  public cardForm!: FormGroup;

  public errorPayMessage!: string;

  months = ['Mois', '01','02', '03','04', '05', '06', '07', '08', '09', '10', '11', '12',];
  years = ['Année', '2023', '2024', '2025', '2026', '2027', '2028', '2029',];

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.initCardForm();
  }

  public initCardForm() {
    this.cardForm = this.formBuilder.group({
      num_card: [null, [Validators.required]],
      month: [this.months[0], [Validators.required]],
      year: [this.years[0], [Validators.required]],
      cvv: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],

    });
  }

  public onPay(): void  {
    if(this.cardForm.invalid) {
      this.errorPayMessage = "Veuillez renseigner tous les champs!";
    } else {
      this.errorPayMessage = "";
      localStorage.clear();
      this.router.navigate(['/payment-success']);
    }
  }


  public getItemFromStorage() {
    return JSON.parse(localStorage.getItem('address')!)
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
