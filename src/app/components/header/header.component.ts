import { Component, EventEmitter, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product, PRODUCTS } from 'src/app/mocks/products.mock';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  Products: Product[] = [];
  formSearch!: FormGroup;
  // keys = '';
  @Output() searchEvent = new EventEmitter();

  constructor(
    public cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.formSearch = this.formBuilder.group({
      search: [null],
    });
    this.cartService.getTotalQuantity();
  }
  getInput() {
    return this.formSearch.value.search;
  }
  // recherche() {
  //   let input = this.getInput();
  //   const searchProducts = PRODUCTS.filter(
  //     (product) =>
  //       product.categorie.includes(input) ||
  //       product.sousCategorie.includes(input)
  //   );
  //   // console.log(searchProducts);
  //   return searchProducts;
  // }
  addSearch() {
    this.searchEvent.emit(this.getInput());
    console.log(typeof this.getInput());
  }
}
