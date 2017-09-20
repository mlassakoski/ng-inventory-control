import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guard/auth.guard';
import { ModuleWithProviders } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'login', component: LoginComponent },
    {
      path: 'dashboard', component: DashboardComponent,
      canLoad: [AuthGuard],
      // canActivateChild: [AuthGuard],
      children: [
        { path: '', component: HomeComponent },
        { path: 'profile', component: ProfileComponent },
        { path: 'list-product', component: ProductListComponent },
        { path: 'new-product', component: ProductFormComponent },
        { path: 'new-product/:id', component: ProductFormComponent },
        { path: '**', redirectTo: '' }
      ]
    },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
