import { PeopleRoutingModule } from './people.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleFormComponent } from './people-form/people-form.component';
import { PeopleListComponent } from './people-list/people-list.component';

@NgModule({
  imports: [
    CommonModule,
    PeopleRoutingModule
  ],
  declarations: [
    PeopleFormComponent,
    PeopleListComponent
  ]
})
export class PeopleModule { }
