import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {MainComponent} from "./mainPage/main.component";


const routes: Routes = [
  { path: "", redirectTo: "/", pathMatch: "full" },
  { path: "", component: MainComponent },
  // { path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  //{ path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
