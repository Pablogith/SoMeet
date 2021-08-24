import {TestBed} from '@angular/core/testing';

import {UsersMockService} from './users-mock.service';
import {User} from '@features/users/interfaces/user';

describe('UsersMockService', () => {
  let service: UsersMockService;


  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be return user by id', () => {
    const expectIdNumber: number = 2;
    const user: User = {
      id: expectIdNumber,
      username: 'Pablo',
      password: '123kurwy'
    };
    let returnedUserFromService!: User;
    service.getUserById(expectIdNumber).subscribe((result: User) => {
      returnedUserFromService = result;
    });
    expect(returnedUserFromService.id).toBe(user.id);
  });
});
