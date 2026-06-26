import { Routes } from '@angular/router';
import { Layout } from '@core/layout/layout';
import { Login } from '@features/auth/login/login';

export const routes: Routes = [
  {
    path: 'login',
    component: Login,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: 'inicio',
        loadComponent: () => import('@features/home/home').then((m) => m.Home),
      },
      {
        path: 'personal-y-accesos',
        loadChildren: () =>
          import('@features/personnel-access/personnel-access.routes').then(
            (m) => m.PERSONAL_ACCESS_ROUTES,
          ),
      },
    ],
  },
  { path: '**', redirectTo: 'login' },
];
