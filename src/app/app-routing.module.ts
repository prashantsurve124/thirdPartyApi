import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './common/auth.guard';

const routes: Routes = [ 
                        {path : 'users', component : UserListComponent },
                        {path : 'dashboard', component : DashboardComponent, canActivate : [AuthGuard]  },
                        {path : 'login', component : LoginComponent },
                        {path : '**', component : LoginComponent }
                       ];

@NgModule({
  imports:
  [
    RouterModule.forRoot(routes),
   
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
