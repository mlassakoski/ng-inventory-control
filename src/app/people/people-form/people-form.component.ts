import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { User } from './../../login/user';
import { PeopleService } from './../people.service';
declare var $: any;

@Component({
  selector: 'app-people-form',
  templateUrl: './people-form.component.html',
  styleUrls: ['./people-form.component.scss']
})
export class PeopleFormComponent implements OnInit {

  public user: User = new User();
  public form: FormGroup;
  public id: number;
  private _subscription: Subscription;
  public profiles = [
    { value: 'USER', label: 'User' },
    { value: 'ADMIN', label: 'Admin' }
  ]

  constructor(private _service: PeopleService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute) {

    this.id = route.snapshot.params.id;
  }

  ngOnInit() {
    this._subscription = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];

        this.getUser();
      }
    );

    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      birthDate: [null, Validators.required],
      password: [null, Validators.required],
      profile: [null, Validators.required],
      status: [null, Validators.required]
    });

    $(document).ready(function () {
      $('select').material_select();
    });
    $('.datepicker').pickadate({
      selectMonths: true,
      selectYears: 70,
      today: 'Today',
      clear: 'Clear',
      close: 'Ok',
      closeOnSelect: false
    });
  }

  add(user: User) {
    this._service.addUser(this.form.value)
      .subscribe(data => {
        console.log('adicionado');
      }, err => {
        console.log('erro');
      })
    this.form.reset();
  }

  update() {
    this._service.updateUser(this.user)
      .subscribe(data => {
        console.log('atualizado');
      }, err => {
        console.log('erro');
      })
    this.form.reset();
  }

  getUser() {
    this._service.getUser(this.id)
      .subscribe(data => {
        this.user = data;
      }, err => {
        console.log(err);
      })
  }
}
