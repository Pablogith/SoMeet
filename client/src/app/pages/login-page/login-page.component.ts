import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  public emailInputData = {
    title: 'Email',
    name: 'email',
    type: 'email',
    placeholder: 'example@gmail.com'
  };

  public passwordInputData = {
    title: 'Password',
    name: 'password',
    type: 'password',
    placeholder: '********'
  };

  constructor() { }

}
