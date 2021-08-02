import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {PageTitleService} from './page-title.service';

describe('SetPageTitleService', () => {
  let service: PageTitleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule]
    });
    service = TestBed.inject(PageTitleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
