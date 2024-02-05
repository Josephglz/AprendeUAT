import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'AprendeUAT',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage)
  },
  {
    path: 'asesorias',
    title: 'AprendeUAT - Asesorias',
    loadComponent: () => import('./pages/advisory/advisory.page').then((m) => m.AdvisoryPage)
  },
  {
    path: 'asesorias/:id',
    title: 'AprendeUAT - Asesorias',
    loadComponent: () => import('./pages/advisory_details/advisorydetails.page').then((m) => m.AdvisoryDetailsPage)
  }
];
