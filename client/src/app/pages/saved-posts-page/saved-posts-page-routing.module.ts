import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SavedPostPageComponent } from "./saved-post-page.component";

const routes: Routes = [
  {
    path: '',
    component: SavedPostPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SavedPostsPageRoutingModule { }
