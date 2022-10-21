import { HomeComponent } from './../views/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "../views/login/login.component";

const routes: Routes = [
 {path: "", component: HomeComponent},
 {path:"login", component: LoginComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
