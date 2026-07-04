import { CommonModule, NgComponentOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModuleNavigation } from '@core/components/module-navigation/module-navigation';
import { ModuleNavigationStore } from '@services/module-navigation-store/module-navigation-store';
import { PanelStore } from '@services/panel-store/panel-store';
import { PersonnelAccessNavigation } from './components/personnel-access-navigation/personnel-access-navigation';

@Component({
  selector: 'app-personnel-access',
  imports: [
    CommonModule,
    RouterOutlet,
    ModuleNavigation,
    PersonnelAccessNavigation,
    NgComponentOutlet
  ],
  providers: [PanelStore],
  templateUrl: './personnel-access.html',
  styleUrl: './personnel-access.scss',
})
export class PersonnelAccess {
  readonly panelStore: PanelStore = inject(PanelStore);
  readonly submenuStore = inject(ModuleNavigationStore);
}
