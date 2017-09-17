import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { ProductService } from './../product.service';
import { Product } from './../product-list/Iproduct';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit, OnDestroy {

  private _subscription: Subscription;
  public product: Product;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _service: ProductService) {
  }

  ngOnInit() {
    this._subscription = this._route.params.subscribe(
      (params: any) => {
        const id = params['id'];

        this.product = this._service.getProduct(id);

      }
    );
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  onSubmit(form) {
    this._service.update(form.value)
    form.form.reset();
  }
}
