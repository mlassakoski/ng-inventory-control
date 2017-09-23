import { User } from './../login/user';
import { AuthService } from './../login/auth.service';
import { PeopleService } from './../people/people.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public user: User = new User();
  public form: FormGroup;

  constructor(private _service: PeopleService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private _authService: AuthService) {

  }

  ngOnInit() {
    this._service.getUser(this._authService.getUser().id)
      .subscribe(data => this.user = data, err => console.log(err))

    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      birthDate: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  update() {
    this._service.updateUser(this.user)
      .subscribe(data => {
        console.log('atualizado');
      }, err => {
        console.log('erro');
      })
  }
}
