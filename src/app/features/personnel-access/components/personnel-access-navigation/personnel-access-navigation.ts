import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { PanelStore } from '@services/panel-store/panel-store';
import { MATERIAL_IMPORTS } from '@shared/material/material-imports';

@Component({
  selector: 'personnel-access-navigation',
  imports: [...MATERIAL_IMPORTS, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './personnel-access-navigation.html',
  styleUrl: './personnel-access-navigation.scss',
})
export class PersonnelAccessNavigation {
  readonly panelStore: PanelStore = inject(PanelStore);

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  protected navigate(path: string) {
    this.router.navigate([path], { relativeTo: this.route });
    this.panelStore.closeSecondaryPanel();
  }
}
