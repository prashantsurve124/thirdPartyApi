import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './common/auth.guard';
import { AuthloginGuard } from './common/authlogin.guard';


const routes: Routes = [ 
                        
                        // {path : 'users', component : UserListComponent, canActivate : [AuthGuard] },
                        // {path : 'dashboard', component : DashboardComponent, canActivate : [AuthGuard] },
                        // {path : 'login', component : DashboardComponent, redirectTo: LoginComponent, pathMatch: 'full', canActivate : [AuthGuard] },
                        // { path: '', redirectTo: 'dashboard', pathMatch: 'full', canActivate : [AuthGuard]}
                        {path : 'users', component: UserListComponent , canActivate : [AuthGuard] },
                        {path : 'dashboard', component : DashboardComponent, canActivate : [AuthGuard] },
                        {path : 'login', component : LoginComponent, canActivate : [AuthloginGuard]},
                        { path: '', component: DashboardComponent, canActivate: [AuthGuard] }
                       ];

@NgModule({
  imports:
  [
    RouterModule.forRoot(routes),
   
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
