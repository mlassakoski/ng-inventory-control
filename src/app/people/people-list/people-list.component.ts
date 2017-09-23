import { PeopleService } from './../people.service';
import { User } from './../../login/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  public users: User[]

  constructor(private _service: PeopleService) { }

  ngOnInit() {
    this.getUserList();
  }

  getUserList() {
    this._service.getUsers()
    .subscribe(data => {
      this.users = data;
    }, err => {
      console.log(err);
    })
  }

}
