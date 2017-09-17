import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Product } from './product-list/Iproduct';
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

  getProductList() {
    return this._products;
  }

  getProduct(id: number) {
    return _.find(this._products, { 'id': 1 });
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
