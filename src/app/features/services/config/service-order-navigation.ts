export interface NavigationMenuItem {
  label: string;
  icon: string;
  route: string;
}

export const SERVICE_NAVIGATION_MENU: NavigationMenuItem[] = [
  {
    label: 'Catálogo de servicios',
    icon: 'two_wheeler',
    route: 'catalogo-de-servicios',
  },
  {
    label: 'Solicitudes de servicios',
    icon: 'list_alt',
    route: 'solicitudes-de-servicios',
  },
  {
    label: 'Diagnósticos técnicos',
    icon: 'troubleshoot',
    route: 'diagnosticos-tecnicos',
  },
  {
    label: 'Órdenes de servicios',
    icon: 'fact_check',
    route: 'ordenes-de-servicios',
  },
];