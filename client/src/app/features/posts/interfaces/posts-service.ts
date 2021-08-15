import {Post} from '@features/posts/interfaces/post';
import {Observable} from 'rxjs';

export interface PostsService {
  getById(id: number): Observable<Post>;

  getAll(): Observable<ReadonlyArray<Post>>;

  editById(id: number, data: Post): Observable<Post>;

  deleteById(id: number): Observable<Object>;
}
