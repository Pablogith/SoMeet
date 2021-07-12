import { TestBed } from '@angular/core/testing';

import { PageTitleService } from './page-title.service';

describe('SetPageTitleService', () => {
  let service: PageTitleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageTitleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
