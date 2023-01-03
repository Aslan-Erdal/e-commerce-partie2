import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { NotFoundComponent } from './components/not-found/not-found.component';
=======
>>>>>>> 0d60670d4a7509339880692174cbb06a3b311554
import { CartComponent } from './pages/cart/cart.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CategoryComponent } from './pages/category/category.component';
import { HomeComponent } from './pages/home/home.component';
<<<<<<< HEAD
=======
import { NotFoundComponent } from './pages/not-found/not-found.component';
>>>>>>> 0d60670d4a7509339880692174cbb06a3b311554
import { PaymentComponent } from './pages/payment/payment.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'products', component: ProductsComponent },

  { path: 'products/:id', component: ProductComponent },
  { path: 'product', component: ProductComponent },

  { path: 'cart', component: CartComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
<<<<<<< HEAD
export class AppRoutingModule {}
=======
export class AppRoutingModule { }
>>>>>>> 0d60670d4a7509339880692174cbb06a3b311554
