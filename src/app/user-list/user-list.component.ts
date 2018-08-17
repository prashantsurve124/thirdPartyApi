import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../../model/User';
import { Observable } from 'rxjs';
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
      this._user.getUsers()
      // .subscribe(
      //   (res: any) => {
      //     alert("News Success");
      //     this.users = res.data; 
      //     // Where you find the array res.data or res.data.data
      //     console.log('res is ', res);
      //   },
      //   error => {
      //     alert("ERROR");
      //   });
      // }
     .subscribe((res : any) =>{
      this.users = res; 
      console.log(res);
               })
  }

  logModelData() {

    console.log(this.users[0]);
  }
}
