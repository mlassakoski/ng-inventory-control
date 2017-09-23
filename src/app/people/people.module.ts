import { FormsModule } from '@angular/forms';
import { PeopleService } from './people.service';
import { PeopleRoutingModule } from './people.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleFormComponent } from './people-form/people-form.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import {SelectModule} from 'angular2-select';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PeopleRoutingModule,
    ReactiveFormsModule,
    SelectModule
  ],
  declarations: [
    PeopleFormComponent,
    PeopleListComponent
  ],
  providers: [
    PeopleService
  ]
})
export class PeopleModule { }
