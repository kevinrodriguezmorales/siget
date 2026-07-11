import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModuleNavigation } from '@core/components/module-navigation/module-navigation';
import { ModuleNavigationStore } from '@services/module-navigation-store/module-navigation-store';
import { PanelStore } from '@services/panel-store/panel-store';
import { ServiceOrderNavigation } from './components/service-order-navigation/service-order-navigation';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-services',
  imports: [CommonModule, RouterOutlet, ModuleNavigation, ServiceOrderNavigation],
  providers: [PanelStore, provideNativeDateAdapter()],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  readonly panelStore: PanelStore = inject(PanelStore);
  readonly submenuStore = inject(ModuleNavigationStore);
}
