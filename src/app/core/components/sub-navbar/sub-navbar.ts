import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MATERIAL_IMPORTS } from '@shared/material/material-imports';

@Component({
  selector: 'sub-navbar',
  imports: [...MATERIAL_IMPORTS],
  templateUrl: './sub-navbar.html',
  styleUrl: './sub-navbar.scss',
})
export class SubNavbar {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  protected navigate(path: string) {
    this.router.navigate([path], { relativeTo: this.route });
  }
}
