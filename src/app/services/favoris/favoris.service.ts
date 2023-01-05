import { Injectable } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { Product } from 'src/app/mocks/products.mock';

export interface FavorisProduct {
  product: Product,
  quantity?: number,
}

@Injectable({
  providedIn: 'root'
})
export class FavorisService {

  constructor(private toastService: HotToastService) { }

  public getFavoris() {

    const favoris = localStorage.getItem("favoris");

    if(favoris) {
      return JSON.parse(favoris);
    } else {
      this.createFavoris();
      this.getFavoris();
    }
  }

  private createFavoris() {
    const newFavoris: [] = [];
    const stringifyFavoris = JSON.stringify(newFavoris);
    localStorage.setItem('favoris', stringifyFavoris);
  }

  private saveFavoris(favoris: FavorisProduct) {
    localStorage.setItem('favoris', JSON.stringify(favoris));
  }


  public addProductToFavoris(favorisProduct: FavorisProduct) {

    const favoris = this.getFavoris();

    const existingProduct = favoris.find((product: FavorisProduct) => product.product.id === favorisProduct.product.id);

    if(existingProduct) {
        const favorisProductId = favoris.indexOf(existingProduct);

        favoris.splice(favorisProductId, 1);
        this.saveFavoris(favoris);
        this.getFavoris();
        this.toastService.success(`${favorisProduct.product.name} a été supprimé des favoris!`, {
          position: 'top-center',
          autoClose: false,
          dismissible: true,
          style: {
            border: '1px solid #2769B5',
            padding: '16px',
            fontSize: '20px',
            color: '#713200',
          },
        });
    } else {
        favoris.push(favorisProduct);
        this.toastService.success(`${favorisProduct.product.name} a été ajouté aux favoris!`, {
          position: 'top-center',
          autoClose: false,
          dismissible: true,
          style: {
            border: '1px solid #2769B5',
            padding: '16px',
            fontSize: '20px',
            color: '#713200',
          },
        });
    }
    this.saveFavoris(favoris);
  }

  public existsInFavoris(favorisProduct: FavorisProduct) {
    const favoris = this.getFavoris();

    const existingProduct = favoris.find((product: FavorisProduct) => product.product.id === favorisProduct.product.id);
    return existingProduct;
  }


}
