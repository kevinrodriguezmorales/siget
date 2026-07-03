import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SubNavbar } from '@core/components/sub-navbar/sub-navbar';
import { PanelStore } from '@services/panel-store/panel-store';
import { ViewEmployee } from './view-employee/view-employee';
import { SubmenuStore } from '@services/submenu-store/submenu-store';

@Component({
  selector: 'employees',
  imports: [
    CommonModule,
    RouterOutlet,
    SubNavbar,
    ViewEmployee
  ],
  providers: [PanelStore],
  templateUrl: './employees.html',
  styleUrl: './employees.scss',
})
export class Employees {
  readonly panelStore: PanelStore = inject(PanelStore);
  readonly submenuStore = inject(SubmenuStore);
}
