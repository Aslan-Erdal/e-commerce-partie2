import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CategoryComponent } from './pages/category/category.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductComponent } from './pages/product/product.component';
import { CartComponent } from './pages/cart/cart.component';
import { FormComponent } from './components/form/form.component';
import { BienvenueComponent } from './components/bienvenue/bienvenue.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SectionCategoriesComponent } from './components/section-categories/section-categories.component';
import { CardComponent } from './components/card/card.component';
import { SubCategeriesComponent } from './components/sub-categeries/sub-categeries.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { PanierCardComponent } from './components/panier-card/panier-card.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TotalPanierComponent } from './components/total-panier/total-panier.component';
import { DeliveryAddressComponent } from './components/delivery-address/delivery-address.component';
import { ArticlePaymentComponent } from './components/article-payment/article-payment.component';
import { PaymentCreditCardComponent } from './components/payment-credit-card/payment-credit-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    PaymentComponent,
    HomeComponent,
    CategoriesComponent,
    CategoryComponent,
    ProductsComponent,
    ProductComponent,
    CartComponent,
    FormComponent,
    BienvenueComponent,
    CarouselComponent,
    SectionCategoriesComponent,
    CardComponent,
    SubCategeriesComponent,
    ProductDetailsComponent,
    PanierCardComponent,
    NotFoundComponent,
    TotalPanierComponent,
    DeliveryAddressComponent,
    ArticlePaymentComponent,
    PaymentCreditCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
