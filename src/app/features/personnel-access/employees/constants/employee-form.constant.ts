import { SelectedItem, TypeIdentityDocument } from '../models/employee-form.model';

export const LIST_DOCUMENT_TYPES: SelectedItem<TypeIdentityDocument>[] = [
  { value: 1, viewValue: 'DNI' },
  { value: 2, viewValue: 'Pasaporte' },
  { value: 3, viewValue: 'Carnet de extranjería' },
];

export const LIST_JOB_ROLES: SelectedItem<string>[] = [
  { value: 1, viewValue: 'Administrador' },
  { value: 2, viewValue: 'Mecánico' },
  { value: 3, viewValue: 'Cajero' },
  { value: 4, viewValue: 'Contador' },
  { value: 5, viewValue: 'Vendedor' },
  { value: 6, viewValue: 'Almacenero' }
];

export const LIST_AREAS: SelectedItem<string>[] = [
  { value: 1, viewValue: 'Taller' },
  { value: 2, viewValue: 'Almacén' },
  { value: 3, viewValue: 'Caja' },
  { value: 4, viewValue: 'Ventas' },
  { value: 5, viewValue: 'Recepción' },
];
