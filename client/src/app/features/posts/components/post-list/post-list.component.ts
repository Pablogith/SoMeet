import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {Post} from '@features/posts/interfaces/post';
import {PostsMockService} from '@features/posts/services/posts-mock/posts-mock.service';
import {User} from '@features/users/interfaces/user';
import {UsersMockService} from '@features/users/services/users-mock/users-mock.service';

type ArrayOfPosts = Array<Post>;

@Component({
  selector: 'posts-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  public posts!: ArrayOfPosts;

  private posts$!: Observable<ArrayOfPosts>;

  constructor(private postsMockService: PostsMockService,
              private usersMockService: UsersMockService) {
  }

  public ngOnInit(): void {
    this.posts$ = this.postsMockService.getAll() as Observable<ArrayOfPosts>;
    this.posts$.subscribe(posts => {
      this.posts = posts;
    });
  }

  public trackByPostId(index: number, post: Post): Post['id'] {
    return post.id;
  }

  private getUserData(id: number): void {
    let user!: User;
    this.usersMockService.getUserById(id).subscribe(result => {
      user = result;
    });
  }
}
