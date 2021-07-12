import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SavedPostsPageRoutingModule } from './saved-posts-page-routing.module';
import { SavedPostPageComponent } from './saved-post-page.component';


@NgModule({
  declarations: [
    SavedPostPageComponent
  ],
  imports: [
    CommonModule,
    SavedPostsPageRoutingModule
  ]
})
export class SavedPostsPageModule { }
