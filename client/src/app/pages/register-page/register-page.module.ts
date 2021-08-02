import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RegisterPageRoutingModule} from './register-page-routing.module';
import {RegisterPageComponent} from './register-page.component';
import {AppInputsModule} from '@shared/app-inputs/app-inputs.module';


@NgModule({
  declarations: [
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
    RegisterPageRoutingModule,
    AppInputsModule
  ]
})
export class RegisterPageModule {
}
