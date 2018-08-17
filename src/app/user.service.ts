import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class UserService {

  constructor(private http :HttpClient) { }

  url : string = "https://jsonplaceholder.typicode.com/users";
  getUsers() {

    return this.http.get<Observable <User []>>(this.url);
  }
}
