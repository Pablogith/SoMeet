import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { User } from "@features/users/interfaces/user";


@Injectable({
  providedIn: 'root'
})
export class HttpUsersService {

  private URL = 'http://localhost:8080/api/users' as const;

  constructor(private http: HttpClient) { }

  // public getById(): User {}

}
