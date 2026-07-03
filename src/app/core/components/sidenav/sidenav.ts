import { Component, inject } from '@angular/core';
import { NavigationItem } from '../navigation-item/navigation-item';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MATERIAL_IMPORTS } from '@shared/material/material-imports';
import { SIDENAV_ITEMS, NavItem } from '@core/config/sidenav.config';
import { ModuleNavigationStore } from '@services/module-navigation-store/module-navigation-store';

@Component({
  selector: 'sidenav',
  imports: [...MATERIAL_IMPORTS, NavigationItem, RouterLink, RouterLinkActive],
  templateUrl: './sidenav.html',
  styleUrl: './sidenav.scss',
})
export class Sidenav {
  protected menuItems: NavItem[] = SIDENAV_ITEMS; 
  readonly moduleNavigationStore = inject(ModuleNavigationStore);
  
  constructor(private router: Router) {}

  protected navigate(path: string) {
    this.router.navigate([path]);
  }

  protected toggleModuleNavigation(): void {
    this.moduleNavigationStore.toggle();
  }
}
