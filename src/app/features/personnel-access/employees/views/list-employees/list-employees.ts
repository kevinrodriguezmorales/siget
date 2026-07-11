import { CommonModule, Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SectionHeader } from '@core/components/section-header/section-header';
import { Toolbar } from '@core/components/toolbar/toolbar';
import { PanelStore } from '@services/panel-store/panel-store';
import { MATERIAL_IMPORTS } from '@shared/material/material-imports';
import { ViewEmployee } from '../view-employee/view-employee';
import { Alert } from '@core/components/alert/alert';

@Component({
  selector: 'employees',
  imports: [
    ...MATERIAL_IMPORTS,
    CommonModule,
    Toolbar,
    SectionHeader,
    MatFormFieldModule,
    MatInputModule,
    Alert
  ],
  templateUrl: './list-employees.html',
  styleUrl: './list-employees.scss',
})
export class ListEmployees {
  readonly panelStore: PanelStore = inject(PanelStore);
  private readonly location = inject(Location);

  protected viewEmployee(employeeId: number): void {
    this.panelStore.open(ViewEmployee, {
      employeeId,
    }, "view");
  }

  protected goBack(): void {
    this.location.back();
  }
}
