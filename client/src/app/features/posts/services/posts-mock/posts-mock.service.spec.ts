import {TestBed} from '@angular/core/testing';

import {PostsMockService} from './posts-mock.service';
import {Post} from '@features/posts/interfaces/post';

interface ExpectResponse extends Object {
  msg: string;
  errCode: number
}

describe('PostsMockService', () => {
  let service: PostsMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostsMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should find post by id', () => {
    let gotPost!: Post | ExpectResponse;
    const post$ = service.getById(2);
    post$?.subscribe(post => {
      gotPost = post;
    });
    expect(gotPost?.errCode).toEqual(404);
  });
});
