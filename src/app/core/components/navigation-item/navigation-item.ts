import { Component, Input } from '@angular/core';
import { NavItem } from '@core/config/navbar.config';

@Component({
  selector: 'navigation-item',
  imports: [],
  templateUrl: './navigation-item.html',
  styleUrl: './navigation-item.scss',
})
export class NavigationItem {
  @Input() config: NavItem | null = null
}
