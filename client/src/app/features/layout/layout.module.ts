import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { LayoutStructureComponent } from './components/layout-structure/layout-structure.component';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';
import { HeaderComponent } from './components/header/header.component';
import { HamburgerMenuButtonComponent } from './components/hamburger-menu-button/hamburger-menu-button.component';
import { ProfileDropdownComponent } from './components/profile-dropdown/profile-dropdown.component';
import { NotificationsButtonComponent } from './components/notifications-button/notifications-button.component';
import { UserMenuButtonComponent } from './components/user-menu-button/user-menu-button.component';
import { DesktopMenuComponent } from './components/desktop-menu/desktop-menu.component';



@NgModule({
  declarations: [
    LayoutStructureComponent,
    MobileMenuComponent,
    HeaderComponent,
    HamburgerMenuButtonComponent,
    ProfileDropdownComponent,
    NotificationsButtonComponent,
    UserMenuButtonComponent,
    DesktopMenuComponent
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
