import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import User from "./user/user.model";

@Injectable()
export class UserService {
  private apiUrl: string = "http://localhost:8001/users";
  constructor(private http: HttpClient) { }

  getUsers(): any {
    return this.http.get(this.apiUrl);

  }

  findUser(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

}
