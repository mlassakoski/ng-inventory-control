import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Product } from './product-list/product';
import { Observable } from 'rxjs/Rx';
import * as _ from 'lodash';

@Injectable()
export class ProductService {

  private _url: string;
  private _headers: Headers;
  private _products: Product[];

  constructor(private http: Http) {
    this._headers = new Headers();
    this._headers.append('Content-Type', 'application/json');
    this.initList();
  }

  getProductList(): Product[] {
    return this._products;
  }

  getProduct(id: number) {
    for (let i = 0; i < this._products.length; i++) {
      const product = this._products[i];
      if (product.id == id) {
        return product;
      }
    }
    return null;
  }

  update(product: Product) {
    _.assign(this._products, product);
  }

  remove(id: number) {
    this._products = _.reject(this._products, { 'id': id });
  }

  initList() {
    this._products = [
      {
        'id': 1,
        'code': 123,
        'name': 'notebook',
        'description': '',
        'price': 22.5,
        'stock': 20
      },
      {
        'id': 2,
        'code': 125,
        'name': 'pencil',
        'description': '',
        'price': 2.5,
        'stock': 25
      },
      {
        'id': 3,
        'code': 125,
        'name': 'pen',
        'description': '',
        'price': 22.5,
        'stock': 32
      },
      {
        'id': 4,
        'code': 127,
        'name': 'backpack',
        'description': '',
        'price': 52,
        'stock': 7
      }
    ];
  }
}
