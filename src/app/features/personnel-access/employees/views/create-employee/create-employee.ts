import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { SectionHeader } from '@core/components/section-header/section-header';
import { Toolbar } from '@core/components/toolbar/toolbar';
import { FormEmployee } from '../../components/form-employee/form-employee';
import { EmployeeFormValue } from '../../models/employee-form.model';

@Component({
  selector: 'app-create-employee',
  imports: [MatButtonModule, Toolbar, SectionHeader, FormEmployee],
  providers: [provideNativeDateAdapter()],
  templateUrl: './create-employee.html',
  styleUrl: './create-employee.scss',
})
export class CreateEmployee {
  private readonly location = inject(Location);

  protected goBack(): void {
    this.location.back();
  }

  protected createEmployee(value: EmployeeFormValue): void {
    console.log('Crear empleado', value);

    // this.employeeService.create(value).subscribe(...)
  }

  protected cancel(): void {
    // navegar atrás o volver a listar
  }
}
