import { Component, Input } from '@angular/core';
import { Product } from 'src/app/mocks/products.mock';
import { FavorisProduct, FavorisService } from 'src/app/services/favoris/favoris.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() item!: Product;

  constructor(private favorisService: FavorisService) { }


  public addToFavorite(event: Event, item: Product): void {
    event.stopPropagation();
    if (!item) return;
    const favorisProduct: FavorisProduct = {
      product: item,
    }
    this.favorisService.addProductToFavoris(favorisProduct);
}

public isInFavorite(item: Product): boolean {
  this.favorisService.getFavoris();

  const favorisProduct: FavorisProduct = {
    product: item,
  }

  return this.favorisService.existsInFavoris(favorisProduct);
}
}
