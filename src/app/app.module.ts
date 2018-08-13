import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { LoginService } from './login/login.service';

import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserListComponent } from './user-list/user-list.component';
import { LocalStorageHelper } from './common/LocalStorage';
import { LocalStorageService } from '../../node_modules/ng2-localstorage/dist';
import { AuthGuard } from './common/auth.guard';
//import { AuthGuard } from './common/auth.guard';
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
    
     
  ],
  providers: [UserService, LoginService, LocalStorageHelper, LocalStorageService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
