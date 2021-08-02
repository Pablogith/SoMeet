import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpUsersService {

  private readonly URL = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) {
  }

}
