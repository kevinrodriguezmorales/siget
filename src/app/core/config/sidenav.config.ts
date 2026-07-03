export interface NavItem {
  icon: string,
  label: string,
  route: string
}

export const SIDENAV_ITEMS: NavItem[] = [
  { icon: 'home', label: 'Inicio', route: '/inicio' },
  { icon: 'settings', label: 'Personal y accesos', route: '/personal-y-accesos' },
  { icon: 'groups', label: 'Clientes', route: '/clientes' },
  { icon: 'build', label: 'Servicios', route: '/servicios' },
  { icon: 'inventory_2', label: 'Inventario', route: '/inventario' },
];
