import { Component, OnInit } from '@angular/core';
import { AuthService } from './../login/auth.service';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _authService: AuthService) { }

  ngOnInit() {
    $('.button-collapse').sideNav({
      edge: 'left',
      closeOnClick: true
    });

    $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      hover: false,
      belowOrigin: true,
      alignment: 'right'
    }
  );
  }

  logout() {
    this._authService.logout();
  }
}
