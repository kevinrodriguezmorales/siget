import { Component, inject } from '@angular/core';
import { InnerToolbar } from '@core/components/inner-toolbar/inner-toolbar';
import { ListItem } from '@core/components/list-item/list-item';
import { PanelStore } from '@services/panel-store/panel-store';
import { MATERIAL_IMPORTS } from '@shared/material/material-imports';
import { parseEmployeeToListItems } from '@shared/utils/parse-employee';

export type EmployeeStatus = 'active' | 'inactive';

export interface Employee {
  fullName: string;

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

export const employee: Employee = {
  fullName: 'Juan Pérez Torres',

  identityDocument: {
    number: '70008765',
    type: 'DNI',
  },

  job: {
    role: 'Mecánico',
    area: 'Taller',
  },

  phoneNumber: '987876547',
  email: 'juan.perez@empresa.com',
  address: 'Los robles 125',
  startDate: '2021-07-01',
  status: 'active',
};

@Component({
  selector: 'view-employee',
  imports: [...MATERIAL_IMPORTS, InnerToolbar, ListItem],
  templateUrl: './view-employee.html',
  styleUrl: './view-employee.scss',
})
export class ViewEmployee {
  private readonly panelStore = inject(PanelStore);
  readonly employee = employee;
  readonly employeeListItems = parseEmployeeToListItems(this.employee);

  protected closePanel(): void {
    this.panelStore.closeSecondaryPanel();
  }

}
