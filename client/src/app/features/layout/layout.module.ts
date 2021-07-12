import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutStructureComponent } from './components/layout-structure/layout-structure.component';
import { RouterModule } from "@angular/router";



@NgModule({
  declarations: [
    LayoutStructureComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LayoutStructureComponent
  ]
})
export class LayoutModule { }
