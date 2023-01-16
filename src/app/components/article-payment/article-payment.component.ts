import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-article-payment',
  templateUrl: './article-payment.component.html',
  styleUrls: ['./article-payment.component.css']
})
export class ArticlePaymentComponent {

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
    
  }

}
