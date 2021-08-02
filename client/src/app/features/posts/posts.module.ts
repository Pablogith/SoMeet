import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {PostCreateComponent} from './components/post-create/post-create.component';
import {PostListComponent} from './components/post-list/post-list.component';
import {PostListItemComponent} from './components/post-list-item/post-list-item.component';


@NgModule({
  declarations: [
    PostCreateComponent,
    PostListComponent,
    PostListItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    PostCreateComponent,
    PostListComponent
  ]
})
export class PostsModule {
}
