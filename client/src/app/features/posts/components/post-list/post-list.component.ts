import {Component, OnInit} from '@angular/core';
import {Post} from '@features/posts/interfaces/post';
import {PostsMockService} from '@features/posts/services/posts-mock/posts-mock.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'posts-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  public posts!: ReadonlyArray<Post>;

  private posts$!: Observable<ReadonlyArray<Post>>;

  constructor(private postsMockService: PostsMockService) {
  }

  public ngOnInit(): void {
    this.posts$ = this.postsMockService.getAll();
    this.posts$.subscribe(posts => {
      this.posts = posts;
    });
  }

  public trackByPostId(index: number, post: Post): Post['id'] {
    return post.id;
  }
}
