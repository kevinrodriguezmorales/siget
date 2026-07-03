import { CommonModule, Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { SectionHeader } from '@core/components/section-header/section-header';
import { Toolbar } from '@core/components/toolbar/toolbar';
import { PanelStore } from '@services/panel-store/panel-store';
import { MATERIAL_IMPORTS } from '@shared/material/material-imports';

@Component({
  selector: 'employees',
  imports: [
    ...MATERIAL_IMPORTS,
    CommonModule,
    Toolbar,
    SectionHeader,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './employees.html',
  styleUrl: './employees.scss',
})
export class Employees {
  readonly panelStore: PanelStore = inject(PanelStore);
  private readonly location = inject(Location);

  protected openDetails(projectId: number): void {
    this.panelStore.openSecondaryPanel('view', { projectId });
  }

  protected goBack(): void {
    this.location.back();
  }
}
