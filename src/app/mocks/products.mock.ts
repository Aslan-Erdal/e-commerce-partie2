type ProductJender = 'homme' | 'femme' | 'enfant';
type ProductCategory = 'pantalon' | 'chaussures' | 't-shirt' | 'pull';
type Color = 'rouge' | 'blanc' | 'noire' | 'bleu' | 'grise';
type Size = 'L' | 'S' | 'M' | '36' | '40' | '41' | '38' | 'XL';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string[];
  description: string;
  isAvailable: boolean;
  promos: boolean;
  categorie: ProductJender;
  sousCategorie: ProductCategory;
  couleur: Color[];
  taille: Size[];
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 't-shirt rouge',
    price: 50,
    image: [
      'assets/images/product-1.jpg',
      'assets/images/product-1.jpg',
      'assets/images/product-1.jpg',
      'assets/images/product-1.jpg',
      'assets/images/product-1.jpg',
    ],
    description: 'lorem ipsom',
    categorie: 'homme',
    sousCategorie: 't-shirt',
    couleur: ['rouge'],
    taille: ['L'],
    isAvailable: true,
    promos: true,
  },
  {
    id: 2,
    name: 'chaussures noire',
    price: 50,
    image: [
      'assets/images/product-2.jpg',
      'assets/images/product-1.jpg',
      'assets/images/product-1.jpg',
      'assets/images/product-1.jpg',
      'assets/images/product-1.jpg',
    ],
    description: 'lorem ipsom',
    categorie: 'homme',
    sousCategorie: 'chaussures',
    couleur: ['noire'],
    taille: ['40'],
    isAvailable: true,
    promos: true,
  },
  {
    id: 3,
    name: 'chaussures noire',
    price: 50,
    image: [
      'assets/images/product-3.jpg',
      'assets/images/product-3.jpg',
      'assets/images/product-3.jpg',
      'assets/images/product-3.jpg',
      'assets/images/product-3.jpg',
    ],
    description: 'lorem ipsom',
    categorie: 'homme',
    sousCategorie: 'chaussures',
    couleur: ['noire'],
    taille: ['38'],
    isAvailable: true,
    promos: true,
  },
  {
    id: 4,
    name: 't-shirt ',
    price: 50,
    image: [
      'assets/images/product-4.jpg',
      'assets/images/product-4.jpg',
      'assets/images/product-4.jpg',
      'assets/images/product-4.jpg',
      'assets/images/product-4.jpg',
    ],
    description: 'lorem ipsom',
    categorie: 'homme',
    sousCategorie: 't-shirt',
    couleur: ['bleu'],
    taille: ['M'],
    isAvailable: true,
    promos: true,
  },
  {
    id: 5,
    name: 'chaussures ',
    price: 25,
    image: [
      'assets/images/product-5.jpg',
      'assets/images/product-5.jpg',
      'assets/images/product-5.jpg',
      'assets/images/product-5.jpg',
      'assets/images/product-5.jpg',
    ],
    description: 'lorem ipsom',
    categorie: 'homme',
    sousCategorie: 'chaussures',
    couleur: ['grise'],
    taille: ['41'],
    isAvailable: true,
    promos: true,
  },
  {
    id: 6,
    name: 't-shirt ',
    price: 50,
    image: [
      'assets/images/product-6.jpg',
      'assets/images/product-6.jpg',
      'assets/images/product-6.jpg',
      'assets/images/product-6.jpg',
      'assets/images/product-6.jpg',
    ],
    description: 'lorem ipsom',
    categorie: 'homme',
    sousCategorie: 't-shirt',
    couleur: ['noire'],
    taille: ['XL', 'M'],
    isAvailable: true,
    promos: false,
  },
  {
    id: 7,
    name: 'pull ',
    price: 50,
    image: [
      'assets/images/productFemme1.jpg',
      'assets/images/productFemme2.jpg',
      'assets/images/productFemme2.jpg',
      'assets/images/productFemme2.jpg',
      'assets/images/productFemme2.jpg',
    ],
    description: 'lorem ipsom',
    categorie: 'femme',
    sousCategorie: 'pull',
    couleur: ['blanc'],
    taille: ['M', 'S'],
    isAvailable: true,
    promos: false,
  },
];
