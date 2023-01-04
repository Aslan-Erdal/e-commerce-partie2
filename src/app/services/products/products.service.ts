import { Injectable } from '@angular/core';
import { Product, PRODUCTS } from 'src/app/mocks/products.mock';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}
  //retourner la liste de tous les produits
  getProducts() {
    return PRODUCTS;
  }

  getProductById(id: number): Product | undefined {
    return PRODUCTS.find((product) => product.id === id);
  }
  getnewProducts() {
    let newProduct = [...PRODUCTS];
    return newProduct.splice(1);
  }
  getProductJender(categorie: string | null): Product[] | undefined {
    return PRODUCTS.filter((product) => product.categorie === categorie);
  }
}
