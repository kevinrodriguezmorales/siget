import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MATERIAL_IMPORTS } from '@shared/material/material-imports';
import { InnerToolbar } from '@core/components/inner-toolbar/inner-toolbar';
import { SectionHeader } from '@core/components/section-header/section-header';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PanelStore } from '@services/panel-store/panel-store';
import { Location } from '@angular/common';

@Component({
  selector: 'list-employees',
  imports: [
    ...MATERIAL_IMPORTS,
    MatToolbarModule,
    MatTableModule,
    InnerToolbar,
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
