import { Routes } from '@angular/router';

export const PERSONAL_ACCESS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./personnel-access').then((m) => m.PersonnelAccess),
    children: [
      { path: '', redirectTo: 'empleados', pathMatch: 'full' },
      {
        path: 'empleados',
        loadComponent: () => import('./views/employees/employees').then((m) => m.Employees),
      },
      {
        path: 'crear-empleado',
        loadComponent: () => import('./views/create-employee/create-employee').then((m) => m.CreateEmployee),
      },
    ],
  },
];
