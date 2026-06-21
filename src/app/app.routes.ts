import { Routes } from '@angular/router';
import { Layout } from '@core/layout/layout';
import { Home } from '@features/home/home';
import { Employees } from '@features/personnel-access/employees/employees';
import { ListEmployees } from '@features/personnel-access/employees/list-employees/list-employees';
import { PersonnelAccess } from '@features/personnel-access/personnel-access';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', redirectTo: 'inicio', pathMatch: 'full' },
      {
        path: 'inicio',
        loadComponent: () =>
          import('@features/home/home').then(m => m.Home)
      },
      {
        path: 'personal-y-accesos',
        loadChildren: () =>
          import('@features/personnel-access/personnel-access.routes').then(m => m.PERSONAL_ACCESS_ROUTES)
      }
    ],
  },
  { path: '**', redirectTo: 'inicio' },
];
