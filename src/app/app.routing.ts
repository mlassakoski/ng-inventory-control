import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductFormComponent } from './product/product-form/product-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list', component: ProductListComponent },
  { path: 'new-product', component: ProductFormComponent },
  { path: '**', redirectTo: '' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
