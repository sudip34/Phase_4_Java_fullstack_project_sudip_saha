import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductServiceService } from './services/product-service.service';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SearchComponent } from './components/search/search.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { PaymentComponent } from './components/payment/payment.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AuthGaurdService } from './services/auth-gaurd.service';

import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

const routes:Routes =[
  {path:"reset-password", component:ResetPasswordComponent,canActivate:[AuthGaurdService]},
  {path:"dashboard", component:DashboardComponent,canActivate:[AuthGaurdService]},
  {path:"admin-login", component:AdminLoginComponent},
  {path:"payment", component:PaymentComponent},
  {path:"cart-details", component:CartDetailsComponent},
  {path:"products/:id", component:ProductDetailsComponent},
  {path:"search/:keyword", component:ProductListComponent},
  {path:"products", component:ProductListComponent},
  {path:"", redirectTo:"/products",pathMatch:"full"},
  {path:"**", redirectTo:"/products",pathMatch:"full"},
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailsComponent,
    SearchComponent,
    CartDetailsComponent,
    CartStatusComponent,
    PaymentComponent,
    DashboardComponent,
    AdminLoginComponent,
    ResetPasswordComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProductServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
