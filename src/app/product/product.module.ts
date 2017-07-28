import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';


@NgModule({
  declarations: [
    ProductFormComponent,
    ProductListComponent
  ],
  exports: [
    ProductFormComponent,
    ProductListComponent
  ]
})
export class ProductModule {}
