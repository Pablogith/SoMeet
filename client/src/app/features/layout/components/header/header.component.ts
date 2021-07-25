import { Component, Input } from '@angular/core';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() pageTitle!: string;

  constructor() { }

}
