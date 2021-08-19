import {Component, Input, OnInit} from '@angular/core';

import {Post} from '@features/posts/interfaces/post';
import {User} from '@features/users/interfaces/user';

@Component({
  selector: 'posts-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input()
  postData!: Post;

  @Input()
  userData!: User;

  public ngOnInit(): void {
    console.log(this.postData);
  }
}
