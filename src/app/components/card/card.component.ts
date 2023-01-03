import { Component, Input } from '@angular/core';
import { Product } from 'src/app/mocks/products.mock';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() item!: Product;
}
