import { Component } from '@angular/core';
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
  keys = '';
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.formSearch = this.formBuilder.group({
      search: [null],
    });
  }
  getInseedCode() {
    console.log(this.formSearch.value.search);
  }
  recherche() {
    let input = this.formSearch.value.search;
    const searchProducts = PRODUCTS.filter(
      (product) =>
        product.categorie.includes(input) ||
        product.sousCategorie.includes(input)
    );
    return searchProducts;
  }
}
