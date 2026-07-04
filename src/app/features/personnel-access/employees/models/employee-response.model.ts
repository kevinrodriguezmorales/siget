import { EmployeeStatus } from "./employee.model";

export interface Employee {
  firstName: string;
  lastName: string;
  identityDocument: {
    number: string;
    type: string;
  };
  job: {
    role: string;
    area: string;
  };
  phoneNumber: string;
  email: string;
  address: string;
  startDate: string;
  status: EmployeeStatus;
}