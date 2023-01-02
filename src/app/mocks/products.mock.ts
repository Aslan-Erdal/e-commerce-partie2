type ProductParentCategory = 'homme' | 'femme' | 'enfant';
type ProductChildCategory = 'pantalon' | 'chaussures' | 't-shirt';
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  categorie: ProductParentCategory;
  sousCategorie: ProductChildCategory;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 't-shirt rouge',
    price: 50,
    image: 'assets/images/product-1.jpg',
    description: 'lorem ipsom',
    categorie: 'homme',
    sousCategorie: 't-shirt',
  },
  {
    id: 2,
    name: 'chaussures noire',
    price: 50,
    image: 'assets/images/product-2.jpg',
    description: 'lorem ipsom',
    categorie: 'homme',
    sousCategorie: 'chaussures',
  },
  {
    id: 3,
    name: 'chaussures noire',
    price: 50,
    image: 'assets/images/product-3.jpg',
    description: 'lorem ipsom',
    categorie: 'homme',
    sousCategorie: 'chaussures',
  },
  {
    id: 4,
    name: 't-shirt ',
    price: 50,
    image: 'assets/images/product-4.jpg',
    description: 'lorem ipsom',
    categorie: 'homme',
    sousCategorie: 't-shirt',
  },
  {
    id: 5,
    name: 'chaussures ',
    price: 50,
    image: 'assets/images/product-5.jpg',
    description: 'lorem ipsom',
    categorie: 'homme',
    sousCategorie: 'chaussures',
  },
  {
    id: 6,
    name: 't-shirt ',
    price: 50,
    image: 'assets/images/product-6.jpg',
    description: 'lorem ipsom',
    categorie: 'homme',
    sousCategorie: 't-shirt',
  },
];
