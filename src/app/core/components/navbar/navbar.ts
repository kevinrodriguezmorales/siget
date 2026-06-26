import { Component } from '@angular/core';
import { NavigationItem } from '../navigation-item/navigation-item';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MATERIAL_IMPORTS } from '@shared/material/material-imports';
import { NAVBAR_ITEMS, NavItem } from '@core/config/navbar.config';

@Component({
  selector: 'navbar',
  imports: [...MATERIAL_IMPORTS, NavigationItem, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

  protected menuItems: NavItem[] = NAVBAR_ITEMS; 
  
  constructor(private router: Router) {}

  protected navigate(path: string) {
    this.router.navigate([path]);
  }
}
