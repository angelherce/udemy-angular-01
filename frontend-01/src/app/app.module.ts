import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductService } from './services/product/product.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductsInsertComponent } from './components/products-insert/products-insert.component';
import { FormsModule } from '@angular/forms';
import { ProductsDetailComponent } from './components/products-detail/products-detail.component';
import { ProductsEditComponent } from './components/products-edit/products-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    ProductsListComponent,
    ProductsInsertComponent,
    ProductsDetailComponent,
    ProductsEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
