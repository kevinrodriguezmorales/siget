import { Location } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconButton } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { Toolbar } from '@core/components/toolbar/toolbar';
import { FormEmployee } from '../../components/form-employee/form-employee';
import { EmployeeFormValue } from '../../models/employee-form.model';
import { PanelStore } from '@services/panel-store/panel-store';

@Component({
  selector: 'edit-employee',
  imports: [Toolbar, MatIconButton, ReactiveFormsModule, FormEmployee],
  providers: [provideNativeDateAdapter()],
  templateUrl: './edit-employee.html',
  styleUrl: './edit-employee.scss',
})
export class EditEmployee {
  protected employee: EmployeeFormValue = {
    documentNumber: '70009882',
    documentType: 'DNI',
    firstName: 'Juan',
    lastName: 'Pérez',
    email: 'juan.perez@empresa.com',
    phone: '987654321',
    address: 'Los robles 125',
    jobRole: 'Mecánico',
    area: 'Taller',
    startDate: '2021-07-01',
    status: 'active',
  };
  public employeeId = input<number | null>(null);

  private readonly panelStore = inject(PanelStore);

  protected updateEmployee(value: EmployeeFormValue): void {
    console.log('Editar empleado', value);

    // this.employeeService.update(id, value).subscribe(...)
  }

  protected cancel(): void {
    // navegar atrás o volver a listar
  }

  protected closePanel(): void {
    this.panelStore.close();
  }
}
