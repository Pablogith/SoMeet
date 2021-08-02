import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LabelInputComponent} from './components/label-input/label-input.component';


@NgModule({
  declarations: [
    LabelInputComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LabelInputComponent
  ]
})
export class AppInputsModule {
}
