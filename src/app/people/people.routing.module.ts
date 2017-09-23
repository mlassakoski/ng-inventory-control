import { PeopleFormComponent } from './people-form/people-form.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [RouterModule.forChild(
    [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: PeopleListComponent },
      { path: 'new', component: PeopleFormComponent },
      { path: ':id', component: PeopleFormComponent },
    ])],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
