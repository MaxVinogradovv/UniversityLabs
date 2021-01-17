import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {MainComponent} from "./mainPage/main.component";
import {ProductsComponent} from "./products/products.component";
import {BucketComponent} from "./bucket/bucket.component";


const routes: Routes = [
  { path: "", redirectTo: "/", pathMatch: "full" },
  { path: "", component: MainComponent },
  { path: "admin/5fdf6a86cb9fe364ad9d87c6", component: ProductsComponent },
  // { path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard] },
  { path: "bucket", component: BucketComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  //{ path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
