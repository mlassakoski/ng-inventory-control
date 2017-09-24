import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PeopleFormComponent } from './people-form/people-form.component';
import { PeopleListComponent } from './people-list/people-list.component';

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
