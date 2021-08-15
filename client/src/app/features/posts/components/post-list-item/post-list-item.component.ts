import {Component, Input, OnInit} from '@angular/core';
import {Post} from '@features/posts/interfaces/post';

@Component({
  selector: 'posts-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input()
  postData!: Post;

  public ngOnInit(): void {
    console.log(this.postData);
  }
}
