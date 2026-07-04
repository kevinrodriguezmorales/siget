import { Routes } from '@angular/router';

export const PERSONAL_ACCESS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./personnel-access').then((m) => m.PersonnelAccess),
    children: [
      { path: '', redirectTo: 'empleados', pathMatch: 'full' },
      {
        path: 'empleados',
        loadComponent: () => import('./employees/views/list-employees/list-employees').then((m) => m.ListEmployees),
      },
      {
        path: 'crear-empleado',
        loadComponent: () => import('./employees/views/create-employee/create-employee').then((m) => m.CreateEmployee),
      },
    ],
  },
];
