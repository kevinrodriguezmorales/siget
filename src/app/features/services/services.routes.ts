import { Routes } from '@angular/router';

export const SERVICES_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./services').then((m) => m.Services),
    children: [
      { path: '', redirectTo: 'ordenes-de-servicios', pathMatch: 'full' },
      {
        path: 'ordenes-de-servicios',
        loadComponent: () => import('./service-order/views/list-service-orders/list-service-orders').then((m) => m.ListServiceOrders),
      },
      {
        path: 'crear-orden-de-servicio',
        loadComponent: () => import('./service-order/views/create-service-order/create-service-order').then((m) => m.CreateServiceOrder),
      },
    ],
  },
];
