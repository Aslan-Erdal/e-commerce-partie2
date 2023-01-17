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
        const adding = this.toastService.success(`${favorisProduct.product.name} a été supprimé des favoris!`, {
          position: 'top-center',
          autoClose: true,
          dismissible: true,
        });
        setTimeout(() => {
          adding.close();
        }, 1500);
    } else {
        favoris.push(favorisProduct);
        const remove = this.toastService.success(`${favorisProduct.product.name} a été ajouté aux favoris!`, {
          position: 'top-center',
          autoClose: true,
          dismissible: true,
        });
        setTimeout(() => {
          remove.close();
        }, 1500);
    }
    this.saveFavoris(favoris);
  }

  public existsInFavoris(favorisProduct: FavorisProduct) {
    const favoris = this.getFavoris();

    const existingProduct = favoris.find((product: FavorisProduct) => product.product.id === favorisProduct.product.id);
    return existingProduct;
  }


}
