import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Product } from './product-list/product';
import * as _ from 'lodash';

@Injectable()
export class ProductService {

  private _url: string;
  private _headers: Headers;

  constructor(private _http: Http) {
    this._url = 'http://localHost:8081/api';
    this._headers = new Headers();
    this._headers.append('Content-Type', 'application/json');
  }

  getProductList() {
    return this._http.get(`${this._url}/product`, { headers: this._headers })
      .map(res => res.json());
  }

  addProduct(product: Product) {
    return this._http.post(`${this._url}/product`, JSON.stringify(product), { headers: this._headers })
      .map(res => res.json());
  }

  getProduct(id: number) {
    return this._http.get(`${this._url}/product/${id}`, { headers: this._headers })
      .map(res => res.json());
  }

  update(product: Product) {
    return this._http.put(`${this._url}/product`, JSON.stringify(product), { headers: this._headers })
      .map(res => res.json());
  }

  remove(id: number) {
    return this._http.delete(`${this._url}/product/${id}`, { headers: this._headers })
      .map(res => res.json());
  }

  getCategories() {
    return this._http.get(`${this._url}/product/category`, { headers: this._headers })
      .map(res => res.json());
  }
}
