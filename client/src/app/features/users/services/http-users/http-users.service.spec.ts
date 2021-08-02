import {TestBed} from '@angular/core/testing';

import {HttpUsersService} from './http-users.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('HttpUserService', () => {
  let service: HttpUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpUsersService]
    });
    service = TestBed.inject(HttpUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
