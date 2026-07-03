import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { SectionHeader } from '@core/components/section-header/section-header';
import { Toolbar } from '@core/components/toolbar/toolbar';
import { PanelStore } from '@services/panel-store/panel-store';
import { MATERIAL_IMPORTS } from '@shared/material/material-imports';

@Component({
  selector: 'list-employees',
  imports: [
    ...MATERIAL_IMPORTS,
    MatTableModule,
    Toolbar,
    SectionHeader,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './list-employees.html',
  styleUrl: './list-employees.scss',
})
export class ListEmployees {
  private readonly panelStore = inject(PanelStore);
  private readonly location = inject(Location);

  protected openEditForm(): void {
    this.panelStore.openSecondaryPanel('edit', null);
  }

  protected openDetails(projectId: number): void {
    this.panelStore.openSecondaryPanel('view', { projectId });
  }

  protected goBack(): void {
    this.location.back();
  }
}
