import { Component, Input } from '@angular/core';
import { Post } from "@features/posts/interfaces/post";

@Component({
  selector: 'posts-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {

  @Input()
  get posts(): Array<Post> { return this._posts; }
  set posts(posts: Array<Post>) {
    this._posts = posts || false;
  }

  private _posts!: Array<Post>;

  constructor() { }

  public trackByPostId(index: number, post: Post): Post['id'] {
    return post.id;
  }

  public typeofIsObject(posts: Array<Post>): boolean {
    return (typeof (posts).toString() === 'object');
  }
}
