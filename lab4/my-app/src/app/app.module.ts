import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import {DataService} from "./data.service";
import {HttpClientModule} from "@angular/common/http";
import {httpInterceptors} from "./interceptors/http-interceptors";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {MainComponent} from "./mainPage/main.component";

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ProductsSimpleComponent} from "./products-simple/products-simple.component";
import {BucketComponent} from "./bucket/bucket.component";

import { CookieService} from "ngx-cookie-service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    MobileMenuComponent,
    FooterComponent,
    ProductsComponent,
    ProductComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,
    ProductsSimpleComponent,
    BucketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  providers: [
    DataService,
    CookieService,
    ...httpInterceptors
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
