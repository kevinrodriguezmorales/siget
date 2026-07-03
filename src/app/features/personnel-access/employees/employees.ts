import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModuleNavigation } from '@core/components/module-navigation/module-navigation';
import { PanelStore } from '@services/panel-store/panel-store';
import { ViewEmployee } from './view-employee/view-employee';
import { ModuleNavigationStore } from '@services/module-navigation-store/module-navigation-store';
import { PersonnelAccessNavigation } from '../components/personnel-access-navigation/personnel-access-navigation';

@Component({
  selector: 'employees',
  imports: [CommonModule, RouterOutlet, ModuleNavigation, ViewEmployee, PersonnelAccessNavigation],
  providers: [PanelStore],
  templateUrl: './employees.html',
  styleUrl: './employees.scss',
})
export class Employees {
  readonly panelStore: PanelStore = inject(PanelStore);
  readonly submenuStore = inject(ModuleNavigationStore);
}
