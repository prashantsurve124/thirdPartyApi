import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [ 
                        {path : 'users',component : UserListComponent },
                        {path : 'dashboard',component : DashboardComponent }
                     
                      ];

@NgModule({
  imports:
  [
    RouterModule.forRoot(routes),
   
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
