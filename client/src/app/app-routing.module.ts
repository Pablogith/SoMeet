import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule),
    data: {title: 'Home'}
  },
  {
    path: 'messages',
    loadChildren: () => import('./pages/messages-page/messages-page.module').then(m => m.MessagesPageModule),
    data: {title: 'Messages'}
  },
  {
    path: 'saved-posts',
    loadChildren: () => import('./pages/saved-posts-page/saved-posts-page.module').then(m => m.SavedPostsPageModule),
    data: {title: 'Saved posts'}
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile-page/profile-page.module').then(m => m.ProfilePageModule),
    data: {title: 'Profile'}
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings-page/settings-page.module').then(m => m.SettingsPageModule),
    data: {title: 'Settings'}
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login-page/login-page.module').then(m => m.LoginPageModule),
    data: {title: 'Login'}
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register-page/register-page.module').then(m => m.RegisterPageModule),
    data: {title: 'Register'}
  },
  {
    path: '**',
    loadChildren: () => import('./pages/not-found-page/not-found-page.module').then(m => m.NotFoundPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
