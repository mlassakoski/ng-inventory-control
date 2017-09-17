import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductService } from './product.service';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { AppRoutingModule } from '../app.routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [
    ProductFormComponent,
    ProductListComponent
  ],
  providers: [
    ProductService
  ],
  exports: [
    ProductFormComponent,
    ProductListComponent
  ]
})
export class ProductModule {}
