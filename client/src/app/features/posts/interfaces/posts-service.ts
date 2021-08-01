import { Post } from '@features/posts/interfaces/post';
import { Observable } from 'rxjs';

export interface PostsService {
  getById(id: number): Observable<Post> | null;
  getAll(): Observable<Array<Post>> | Observable<Post> | Observable<ArrayBuffer> | null;
  editById(id: number, data: any): Observable<Post> | Observable<object>;
  deleteById(id: number): Observable<Object>;
}
