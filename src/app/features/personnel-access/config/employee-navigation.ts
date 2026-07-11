export interface NavigationMenuItem {
  label: string;
  icon: string;
  route: string;
}

export const PERSONAL_ACCESS_NAVIGATION_MENU: NavigationMenuItem[] = [
  {
    label: 'Empleados',
    icon: 'assignment_ind',
    route: 'empleados',
  },
  {
    label: 'Cuentas de usuarios',
    icon: 'account_box',
    route: 'cuentas-de-usuarios',
  },
  {
    label: 'Roles y permisos',
    icon: 'settings_account_box',
    route: 'roles-y-permisos',
  }
];