import {Observable} from 'rxjs';
import {User} from '@features/users/interfaces/user';

export interface UsersService {
  getUserById(id: number): Observable<User>;
}
