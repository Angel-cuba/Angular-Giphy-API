import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./gifs/pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'details/:id',
    loadComponent: () =>
      import('./gifs/components/details/details.component').then(
        (m) => m.DetailsComponent
      ),
  },
  {
    path: 'details',
    loadComponent: () =>
      import('./gifs/components/details/details.component').then(
        (m) => m.DetailsComponent
      ),
  },

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];
