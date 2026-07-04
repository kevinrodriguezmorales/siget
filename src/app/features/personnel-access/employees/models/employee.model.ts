export type EmployeeStatus = 'active' | 'inactive';

export interface Employee {
  id: number;
  documentNumber: string;
  documentType: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  jobRole: string;
  area: string;
  startDate: string;
  status: EmployeeStatus;
}
