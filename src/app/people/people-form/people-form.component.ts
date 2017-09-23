import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-people-form',
  templateUrl: './people-form.component.html',
  styleUrls: ['./people-form.component.scss']
})
export class PeopleFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      $('select').material_select();
    });
  }

}
