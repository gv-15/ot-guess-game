import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component'),
  },
  {
    path: 'gala-wizard',
    loadComponent: () => import('./gala-wizard/gala-wizard.component'),
  },
];
