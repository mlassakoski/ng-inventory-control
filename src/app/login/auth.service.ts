import { Observable } from 'rxjs/Rx';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';

@Injectable()
export class AuthService {

  private _isLogged: boolean;
  private _url: string;
  private _headers: Headers;

  constructor(private http: Http, private router: Router) {
    this._headers = new Headers();
    this._headers.append('Content-Type', 'application/json');
  }

  login(user: User): Observable<User> {
    return this.http.post('http://localhost:8081/api/user/authenticate', JSON.stringify(user),  { headers: this._headers })
      .map((res) => {
        const loggedUser = res.json();
        if (user) {
          localStorage.setItem('currentUser', JSON.stringify(loggedUser));
          this._isLogged = true;
        }

        return loggedUser;
      });
  }

  logout() {
    localStorage.removeItem('currentUser');
    this._isLogged = false;
  }

  isAuthenticated() {
    return this._isLogged;
  }
}
