import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {take} from 'rxjs/operators';

import {PostsService} from '@features/posts/interfaces/posts-service';
import {Post} from '@features/posts/interfaces/post';
import {posts as mockPosts} from '@features/posts/services/posts-mock/mock-posts';

@Injectable({
  providedIn: 'root'
})
export class PostsMockService implements PostsService {
  public posts: Array<Post> = mockPosts;

  public deleteById(id: number): Observable<Object> {
    const postIndex: number = this.findPostIndexById(id);
    if (postIndex === -1) {
      return of({msg: 'Not found post with this id number'}).pipe(
        take(1)
      );
    }
    const posts: Array<Post> = this.posts.slice(postIndex, 1);
    return of(posts).pipe(
      take(1)
    );
  }

  public editById(id: number, data: Post): Observable<Post> {
    const postIndex: number = this.findPostIndexById(id);
    this.posts[postIndex] = data;
    const updatedPost = this.findPostById(id);
    return of(updatedPost).pipe(
      take(1)
    );
  }

  public getAll(): Observable<ReadonlyArray<Post>> {
    return of(this.posts as ReadonlyArray<Post>).pipe(
      take(1)
    );
  }

  public getById(id: number): Observable<Post> {
    const post: Post = this.findPostById(id);
    return of(post).pipe(
      take(1)
    );
  }

  private findPostById(id: number): Post {
    return this.posts.find(post => post.id === id as number) as Post;
  }

  private findPostIndexById(id: number): number {
    return this.posts.findIndex(post => post.id === id as number) as number;
  }
}
