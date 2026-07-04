import { ListItemData } from '@core/components/list-item/list-item';
import { EmployeeStatus } from '@features/personnel-access/employees/models/employee.model';
import { Employee } from '../models/employee-response.model';

export function parseEmployeeToListItems(employee: Employee): ListItemData[] {
  return [
    {
      icon: 'badge',
      overline: 'Documento de identidad',
      title: employee.identityDocument.number,
      supporting: employee.identityDocument.type,
    },
    {
      icon: 'account_box',
      overline: 'Cargo / área',
      title: employee.job.role,
      supporting: employee.job.area,
    },
    {
      icon: 'call',
      overline: 'Número telefónico',
      title: employee.phoneNumber,
    },
    {
      icon: 'mail',
      overline: 'Correo',
      title: employee.email,
    },
    {
      icon: 'location_on',
      overline: 'Dirección',
      title: employee.address,
    },
    {
      icon: 'today',
      overline: 'Fecha de ingreso',
      title: formatDate(employee.startDate),
    },
    {
      icon: 'person_check',
      overline: 'Estado en el sistema',
      title: parseEmployeeStatus(employee.status),
    },
  ];
}

function parseEmployeeStatus(status: EmployeeStatus): string {
  const statusMap: Record<EmployeeStatus, string> = {
    active: 'Activo',
    inactive: 'Inactivo',
  };

  return statusMap[status];
}

function formatDate(value: string): string {
  const date = new Date(value);

  return new Intl.DateTimeFormat('es-PE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(date);
}
