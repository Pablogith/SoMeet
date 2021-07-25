import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPageRoutingModule } from './login-page-routing.module';
import { LoginPageComponent } from './login-page.component';
import { AppInputsModule } from "@shared/app-inputs/app-inputs.module";


@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    LoginPageRoutingModule,
    AppInputsModule
  ]
})
export class LoginPageModule { }
