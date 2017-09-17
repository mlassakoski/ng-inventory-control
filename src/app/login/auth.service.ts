import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';

@Injectable()
export class AuthService {

  private _isLogged: boolean;

  constructor(private router: Router) { }

  login(user: User) {

    if (user.email === 'mauriciolassakoski@gmail.com' &&
      user.password === 'qwert') {

      this._isLogged = true;

      this.router.navigate(['/dashboard']);

    } else {
      this._isLogged = false;
    }
  }

  isAuthenticated() {
    return this._isLogged;
  }
}
