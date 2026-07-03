import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SectionHeader } from '@core/components/section-header/section-header';
import { Toolbar } from '@core/components/toolbar/toolbar';
import { MATERIAL_IMPORTS } from '@shared/material/material-imports';

type DocumentType = 'DNI' | 'Pasaporte' | 'Carnet de extranjería';

interface SelectedItem {
  value: number;
  viewValue: DocumentType;
}

const DOCUMENT_TYPES: SelectedItem[] = [
  { value: 1, viewValue: 'DNI' },
  { value: 2, viewValue: 'Pasaporte' },
  { value: 3, viewValue: 'Carnet de extranjería' },
];

@Component({
  selector: 'app-create-employee',
  imports: [
    ...MATERIAL_IMPORTS,
    Toolbar,
    SectionHeader,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatDatepickerModule,
    MatSlideToggleModule
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './create-employee.html',
  styleUrl: './create-employee.scss',
})
export class CreateEmployee {
  private readonly location = inject(Location);
  protected selectedValue!: string;

  protected documentTypes: SelectedItem[] = DOCUMENT_TYPES;

  protected goBack(): void {
    this.location.back();
  }
}
