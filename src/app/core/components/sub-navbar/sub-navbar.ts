import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { SubmenuStore } from '@services/submenu-store/submenu-store';
import { MATERIAL_IMPORTS } from '@shared/material/material-imports';

@Component({
  selector: 'sub-navbar',
  imports: [...MATERIAL_IMPORTS, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sub-navbar.html',
  styleUrl: './sub-navbar.scss',
})
export class SubNavbar {
  readonly submenuStore = inject(SubmenuStore);

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  protected navigate(path: string) {
    this.router.navigate([path], { relativeTo: this.route });
  }
}
