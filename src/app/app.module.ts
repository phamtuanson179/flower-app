import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './views/header/header.component';
import { FooterComponent } from './views/footer/footer.component';
import { ProductsComponent } from './views/products/products.component';
import { ProductsDetailComponent } from './views/products-detail/products-detail.component';
import { CartComponent } from './views/cart/cart.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './views/about/about.component';
import { CompareProductComponent } from './views/compare-product/compare-product.component';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './views/sign-in/sign-in.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    ProductsDetailComponent,
    CartComponent,
    AboutComponent,
    CompareProductComponent,
    SignInComponent,
    SignUpComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
