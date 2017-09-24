import { Http, Headers } from '@angular/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { User } from './../login/user';

@Injectable()
export class PeopleService {

  private _url: string;
  private _headers: Headers;

  constructor(private _http: Http) {
    this._url = 'http://localHost:8081/api';
    this._headers = new Headers();
    this._headers.append('Content-Type', 'application/json');
  }

  addUser(user: User): Observable<User> {
    return this._http.post(`${this._url}/user`, JSON.stringify(user), { headers: this._headers })
      .map(res => res.json());
  }

  getUsers(): Observable<User[]> {
    return this._http.get(`${this._url}/user`, { headers: this._headers })
      .map(res => res.json());
  }

  getUser(id: number): Observable<User> {
    return this._http.get(`${this._url}/user/${id}`, { headers: this._headers })
      .map(res => res.json());
  }

  updateUser(user: User) {
    return this._http.put(`${this._url}/user`, JSON.stringify(user), { headers: this._headers })
      .map(res => res.json());
  }
}
