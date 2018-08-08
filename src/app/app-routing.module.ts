import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [ 
                        {path : 'users', component : UserListComponent },
                        {path : 'dashboard', component : DashboardComponent },
                        {path : 'login', component : LoginComponent }
                       ];

@NgModule({
  imports:
  [
    RouterModule.forRoot(routes),
   
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
