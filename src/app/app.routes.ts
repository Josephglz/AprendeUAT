import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage) },
  { path: 'asesorias', loadComponent: () => import('./pages/advisory/advisory.page').then((m) => m.AdvisoryPage) },
];
