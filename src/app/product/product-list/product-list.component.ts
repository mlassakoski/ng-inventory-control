import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { Product } from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public products: Product[];

  constructor(private _service: ProductService) { }

  ngOnInit() {
    this._service.getProductList()
      .subscribe(data => {
        this.products = data;
      }, err => {
        console.log(err);
      })
  }


  remove(id: number) {
  }
}
