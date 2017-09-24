import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PeopleService } from './people.service';
import { PeopleRoutingModule } from './people.routing.module';
import { PeopleFormComponent } from './people-form/people-form.component';
import { PeopleListComponent } from './people-list/people-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PeopleRoutingModule,
    ReactiveFormsModule
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
