import { Component, inject } from '@angular/core';
import { NavigationItem } from '../navigation-item/navigation-item';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MATERIAL_IMPORTS } from '@shared/material/material-imports';
import { NAVBAR_ITEMS, NavItem } from '@core/config/navbar.config';
import { SubmenuStore } from '@services/submenu-store/submenu-store';

@Component({
  selector: 'navbar',
  imports: [...MATERIAL_IMPORTS, NavigationItem, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  protected menuItems: NavItem[] = NAVBAR_ITEMS; 
  readonly submenuStore = inject(SubmenuStore);
  
  constructor(private router: Router) {}

  protected navigate(path: string) {
    this.router.navigate([path]);
  }


  protected toggleSubNavbar(): void {
    this.submenuStore.toggle();
  }
}
