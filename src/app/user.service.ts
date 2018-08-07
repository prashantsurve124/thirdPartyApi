import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/models';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class UserService {

  constructor(private http :HttpClient) { }

  url : string = "https://reqres.in/api/users?page=1";
  getUsers() {

    return this.http.get(this.url);
  }
}
