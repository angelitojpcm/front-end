import { Routes } from '@angular/router';
import { authGuard } from './modules/auth/service/auth.guard';
import { pagesGuard } from './modules/pages/service/pages.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    canActivate: [authGuard],
    loadChildren: () => import('./modules/auth/auth.routes').then(m => m.Auth)
  },
  {
    path: '',
    canActivate: [pagesGuard],
    loadChildren: () => import('./modules/pages/pages.routes').then(m => m.Pages)
  }
];
