import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user: User = new User();

  constructor(private _service: AuthService) { }

  ngOnInit() {
  }

  login() {
    this._service.login(this.user);
  }
}
