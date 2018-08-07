import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../../model/models';
import { Observable } from '../../../node_modules/rxjs';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users : User[];
  constructor( private _user : UserService) { }

  ngOnInit() {
    this.getUserData();
  }

  getUserData() {
     console.log( this._user.getUsers()
     .subscribe(res => this.users = res));
  }

}
