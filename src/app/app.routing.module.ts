import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guard/auth.guard';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'login', component: LoginComponent },
    {
      path: '', component: HomeComponent,
      children: [
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        { path: 'dashboard', component: DashboardComponent },
        {
          path: 'product',
          loadChildren: './product/product.module#ProductModule'
        },
        {
          path: 'people',
          loadChildren: './people/people.module#PeopleModule'
        }
      ]
    },
    // { path: 'profile', component: ProfileComponent },
    { path: '**', redirectTo: '' },
  ],
    {
      useHash: true
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
