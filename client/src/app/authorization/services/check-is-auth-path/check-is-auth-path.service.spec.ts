import {TestBed} from '@angular/core/testing';

import {CheckIsAuthPathService} from './check-is-auth-path.service';
import {RouterTestingModule} from "@angular/router/testing";

describe('CheckIsAuthPathService', () => {
  let service: CheckIsAuthPathService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule]
    });
    service = TestBed.inject(CheckIsAuthPathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
