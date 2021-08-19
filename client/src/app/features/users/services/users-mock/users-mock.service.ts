import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

import {UsersService as IUsersService} from '@features/users/interfaces/users-service';
import {User} from '@features/users/interfaces/user';
import {mockUsers} from '@features/users/services/users-mock/mock-users';

@Injectable({
  providedIn: 'root'
})
export class UsersMockService implements IUsersService {
  private users: ReadonlyArray<User> = mockUsers;

  public getUserById(id: number): Observable<User> {
    const user: User = this.users.find(user => user.id === id) as User;
    return of(user);
  }
}
