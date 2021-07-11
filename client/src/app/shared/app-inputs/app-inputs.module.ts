import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicInputComponent } from './components/basic-input/basic-input.component';



@NgModule({
  declarations: [
    BasicInputComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BasicInputComponent
  ]
})
export class AppInputsModule { }
