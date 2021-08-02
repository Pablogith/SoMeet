import {Component, Input} from '@angular/core';
import {Post} from '@features/posts/interfaces/post';

@Component({
  selector: 'posts-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {
  @Input()
  get posts(): ReadonlyArray<Post> {
    return this._posts;
  }

  set posts(posts: ReadonlyArray<Post>) {
    this._posts = posts || false;
  }

  private _posts!: ReadonlyArray<Post>;

  public trackByPostId(index: number, post: Post): Post['id'] {
    return post.id;
  }

  public typeofIsObject(posts: ReadonlyArray<Post>): boolean {
    return (typeof posts === 'object');
  }
}
