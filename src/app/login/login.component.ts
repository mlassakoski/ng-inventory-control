import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user: User = new User();

  constructor(private _service: AuthService, private _router: Router) { }

  ngOnInit() {
    this._service.logout();
  }

  login() {
    this._service.login(this.user)
      .subscribe(data => {
        this._router.navigate(['/dashboard']);
      },
      error => {
        console.log('erro')
      });
  }
}
