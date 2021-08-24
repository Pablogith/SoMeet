import {Component, OnInit} from '@angular/core';
import {take} from 'rxjs/operators';

import {Post} from '@features/posts/interfaces/post';
import {PostsMockService} from '@features/posts/services/posts-mock/posts-mock.service';
import {User} from '@features/users/interfaces/user';
import {UsersMockService} from '@features/users/services/users-mock/users-mock.service';


@Component({
  selector: 'posts-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  public posts!: Array<Post>;

  constructor(private postsMockService: PostsMockService,
              private usersMockService: UsersMockService) {
  }

  public ngOnInit(): void {
    this.getPost();
  }

  public trackByPostId(index: number, post: Post): Post['id'] {
    return post.id;
  }

  private getPost(): void {
    this.postsMockService.getAll()
      .pipe(take(1))
      .subscribe(posts => {
        this.posts = posts as Array<Post>;
      });
  }

  private getUserData(id: number): void {
    let user!: User;
    this.usersMockService.getUserById(id).subscribe(result => {
      user = result;
    });
  }
}
