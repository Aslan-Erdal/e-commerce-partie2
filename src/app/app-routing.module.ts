import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductDetailsComponent } from './components/product-details/product-details.component';

import { CartComponent } from './pages/cart/cart.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CategoryComponent } from './pages/category/category.component';
import { HomeComponent } from './pages/home/home.component';
import { PaymentSuccessComponent } from './pages/payment-success/payment-success.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'categories/:categorie', component: CategoriesComponent },
  {
    path: 'categories/:categorie/:sousCategorie',
    component: CategoryComponent,
  },
  { path: 'product', component: ProductComponent },

  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductDetailsComponent },

  { path: 'products/:id', component: ProductComponent },

  { path: 'cart', component: CartComponent },

  { path: 'payment-success', component: PaymentSuccessComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
