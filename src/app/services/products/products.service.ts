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
    return newProduct.slice(-6);
  }
  getProductJender(categorie: string | null): Product[] | undefined {
    return PRODUCTS.filter((product) => product.categorie === categorie);
  }
  getPromos(): Product[] | undefined {
    return PRODUCTS.filter((product) => product.promos === true);
  }

  // getPrixPromos() {
  //   const productsPromos = this.getPromos();
  //   if (productsPromos) {
  //     productsPromos.forEach((product) => {
  //       product.price = product.price / 2;
  //     });
  //   }
  //   return productsPromos;
  // }

  getProductJenderCategorie(
    categorie: string | null,
    souscategorie: string | null
  ): Product[] | undefined {
    return PRODUCTS.filter(
      (product) =>
        product.categorie === categorie &&
        product.sousCategorie === souscategorie
    );
  }
}
