export interface NavItem {
  icon: string,
  label: string,
  route: string
}

export const SIDENAV_ITEMS: NavItem[] = [
  { icon: 'garage_door', label: 'Inicio', route: '/inicio' },
  { icon: 'dashboard_2_gear', label: 'Personal y accesos', route: '/personal-y-accesos' },
  { icon: 'demography', label: 'Clientes', route: '/clientes' },
  { icon: 'shelves', label: 'Inventario', route: '/inventario' },
  { icon: 'build', label: 'Servicios', route: '/servicios' },
];
