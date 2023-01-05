import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/mocks/products.mock';
import { CartProduct, CartService } from 'src/app/services/cart/cart.service';
import { FavorisProduct, FavorisService } from 'src/app/services/favoris/favoris.service';

@Component({
  selector: 'app-panier-card',
  templateUrl: './panier-card.component.html',
  styleUrls: ['./panier-card.component.css']
})
export class PanierCardComponent implements OnInit{

  public sizeShoes: string[] = ['35' , '36' , '37' , '38' , '39', '40', '41', '42', '43'];
  public sizeWears: string[] = ['L' , 'S' , 'M' , 'XL'];
  public colors: string[] = ['rouge' , 'blanc' , 'noire' , 'bleu' , 'grise'];
  public qty: number[] = [1,2,3,4,5,6,7,8,9,10];

  constructor( public cartService: CartService, private favorisService: FavorisService ) { }

  @Input() cart!: CartProduct[];
  @Output() newCardEvent = new EventEmitter<number>();

  @Input() favoris!: FavorisProduct[];


  removeProduct(value: number) {
    this.newCardEvent.emit(value);
  }

  ngOnInit(): void {
    this.cartService.getCart();
    this.cartService.getTotalPrice();
    this.favorisService.getFavoris();


    console.log('CART : ', this.cart);
    console.log('FAVORIS : ', this.favoris);

  }


  public onSizeChange(event: any, cartProduct: CartProduct) {
    console.log("SIZE : ", event.target.value);
    this.cartService.changeSize(event.target.value, cartProduct);
  }

  public onColorChange(event: any, cartProduct: CartProduct) {
    console.log("Color : ", event.target.value);
    if(event.target.value == 'Couleur') return;
    this.cartService.changeColor(event.target.value, cartProduct);
  }

  public onQtyChange(event: any, cartProduct: CartProduct) {
    console.log(+event.target.value);

    if(Number.isNaN(+event.target.value)) {
      return;
    }

    this.cartService.changeQuantity(+event.target.value, cartProduct);
  }

  public addToFavorite(item: Product): void {

      if (!item) return;

      const favorisProduct: FavorisProduct = {
        product: item,
      }

      this.favorisService.addProductToFavoris(favorisProduct);

  }

  public inFavoris(item: FavorisProduct): boolean {
    this.favorisService.getFavoris();
    return this.favorisService.existsInFavoris(item);
  }


}
