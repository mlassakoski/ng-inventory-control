import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

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

}
