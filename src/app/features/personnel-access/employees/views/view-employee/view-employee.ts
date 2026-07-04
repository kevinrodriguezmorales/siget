import { Component, inject, input } from '@angular/core';
import { ListItem } from '@core/components/list-item/list-item';
import { Toolbar } from '@core/components/toolbar/toolbar';
import { PanelStore } from '@services/panel-store/panel-store';
import { MATERIAL_IMPORTS } from '@shared/material/material-imports';
import { Employee } from '../../models/employee-response.model';
import { parseEmployeeToListItems } from '../../utils/parse-employee';
import { EditEmployee } from '../edit-employee/edit-employee';

export const EMPLOYEE: Employee = {
  firstName: 'Juan',
  lastName: 'Pérez Torres',
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
  imports: [...MATERIAL_IMPORTS, Toolbar, ListItem],
  templateUrl: './view-employee.html',
  styleUrl: './view-employee.scss',
})
export class ViewEmployee {
  public employeeId = input<number | null>(null);

  readonly employee = EMPLOYEE;
  readonly employeeListItems = parseEmployeeToListItems(this.employee);

  private readonly panelStore = inject(PanelStore);

  protected closePanel(): void {
    this.panelStore.close();
  }

  protected openEditEmployee(employeeId: number): void {
    this.panelStore.open(EditEmployee, {
      employeeId,
    });
  }
}
