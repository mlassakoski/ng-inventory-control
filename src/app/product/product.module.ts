import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductService } from './product.service';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductRoutingModule } from './product.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductRoutingModule
  ],
  declarations: [
    ProductFormComponent,
    ProductListComponent
  ],
  providers: [
    ProductService
  ],
  exports: []
})
export class ProductModule {}
