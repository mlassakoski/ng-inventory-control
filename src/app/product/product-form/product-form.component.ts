import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Rx';
import { ProductService } from './../product.service';
import { Product } from './../product-list/product';
declare var $: any;

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  private _subscription: Subscription;
  public product: Product = new Product();
  public form: FormGroup;
  public id: number;
  public categories

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _service: ProductService) { }

  ngOnInit() {
    this.getCategories();

    this.form = this._formBuilder.group({
      name: [null, Validators.required],
      description: [null, Validators.required],
      quantity: [null, Validators.required],
      value: [null, Validators.required],
      category: [null, Validators.required]
    });

    $(document).ready(function () {
      $('select').material_select();
    });
  }

  getCategories() {
    this._service.getCategories()
      .subscribe(data => {
        this.categories = data;
      }, err => {
        console.log(err);
      })
  }
  add(user: Product) {
    this._service.addProduct(this.form.value)
      .subscribe(data => {
        console.log('adicionado');
      }, err => {
        console.log('erro');
      })
    this.form.reset();
  }

}
