import { Routes } from '@angular/router';

export const PERSONAL_ACCESS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./personnel-access').then((m) => m.PersonnelAccess),
    children: [
      { path: '', redirectTo: 'empleados', pathMatch: 'full' },
      {
        path: 'empleados',
        loadComponent: () => import('./employees/employees').then((m) => m.Employees),
        children: [
          { path: '', redirectTo: 'listar', pathMatch: 'full' },
          {
            path: 'listar',
            loadComponent: () =>
              import('./employees/list-employees/list-employees').then((m) => m.ListEmployees),
          },
        ],
      },
    ],
  },
];
