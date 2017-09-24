import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user: User;
  form: FormGroup;

  constructor(private _service: AuthService,
    private _router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this._service.logout();

    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });
  }

  login() {
    this._service.login(this.form.value)
      .subscribe(data => {
        this._router.navigate(['/dashboard']);
      },
      error => {
        console.log('erro')
      });
  }
}
