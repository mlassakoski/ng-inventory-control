import { Observable } from 'rxjs/Rx';
import { Http, Headers } from '@angular/http';
import { User } from './../login/user';
import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class PeopleService {

  private _url: string;
  private _headers: Headers;

  constructor(private _http: Http) {
    this._headers = new Headers();
    this._headers.append('Content-Type', 'application/json');
  }

  addUser(user: User): Observable<User> {
    return this._http.post(`http://localHost:8081/api/user`, JSON.stringify(user), { headers: this._headers })
      .map(res => res.json());
  }

  getUsers(): Observable<User[]> {
    return this._http.get(`http://localHost:8081/api/user`, { headers: this._headers })
      .map(res => res.json());
  }

  getUser(id: number): Observable<User> {
    return this._http.get(`http://localHost:8081/api/user/${id}`, { headers: this._headers })
      .map(res => res.json());
  }

  updateUser(user: User) {
    return this._http.put(`http://localHost:8081/api/user`, JSON.stringify(user), { headers: this._headers })
      .map(res => res.json());
  }
}
