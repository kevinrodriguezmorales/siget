import { FormControl, FormGroup } from '@angular/forms';
import { Employee, EmployeeStatus } from './employee.model';

export type EmployeeFormValue = Omit<Employee, 'id'>;
export type EmployeeFormMode = 'create' | 'edit';
export type TypeIdentityDocument = 'DNI' | 'Pasaporte' | 'Carnet de extranjería';

export type EmployeeForm = FormGroup<{
  documentNumber: FormControl<string>;
  documentType: FormControl<string>;
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  email: FormControl<string>;
  phone: FormControl<string>;
  address: FormControl<string>;
  jobRole: FormControl<string>;
  area: FormControl<string>;
  startDate: FormControl<string>;
  status: FormControl<EmployeeStatus>;
}>;

export interface SelectedItem<T> {
  value: number;
  viewValue: T;
}
