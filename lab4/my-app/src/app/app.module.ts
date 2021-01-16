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

import { MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';

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
    MainComponent
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
    MatToolbarModule
  ],
  providers: [
    DataService,
    ...httpInterceptors
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
