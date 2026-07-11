import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { SERVICE_NAVIGATION_MENU } from '@features/services/config/service-order-navigation';
import { PanelStore } from '@services/panel-store/panel-store';
import { MATERIAL_IMPORTS } from '@shared/material/material-imports';

@Component({
  selector: 'service-order-navigation',
  imports: [...MATERIAL_IMPORTS, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './service-order-navigation.html',
  styleUrl: './service-order-navigation.scss',
})
export class ServiceOrderNavigation {
  readonly panelStore: PanelStore = inject(PanelStore);
  protected readonly menuItems = SERVICE_NAVIGATION_MENU;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  protected navigate(path: string) {
    this.router.navigate([path], { relativeTo: this.route });
    this.panelStore.close();
  }
}
