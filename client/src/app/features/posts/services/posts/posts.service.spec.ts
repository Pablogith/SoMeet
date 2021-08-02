import {TestBed} from '@angular/core/testing';

import {PostsService} from './posts.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('PostsService', () => {
  let service: PostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostsService]
    });
    service = TestBed.inject(PostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
