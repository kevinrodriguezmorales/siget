import { CommonModule } from '@angular/common';
import { Component, effect, input, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDivider } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SectionHeader } from '@core/components/section-header/section-header';
import {
  LIST_AREAS,
  LIST_DOCUMENT_TYPES,
  LIST_JOB_ROLES,
} from '../../constants/employee-form.constant';
import {
  EmployeeForm,
  EmployeeFormMode,
  EmployeeFormValue,
  SelectedItem,
  TypeIdentityDocument,
} from '../../models/employee-form.model';

@Component({
  selector: 'form-employee',
  imports: [
    CommonModule,
    SectionHeader,
    MatDivider,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatSlideToggleModule,
  ],
  templateUrl: './form-employee.html',
  styleUrl: './form-employee.scss',
})
export class FormEmployee {
  public readonly mode = input<EmployeeFormMode>('create');
  public readonly initialValue = input<EmployeeFormValue | null>(null);

  protected readonly formSubmit = output<EmployeeFormValue>();
  protected readonly formCancel = output<void>();
  protected readonly form: EmployeeForm = new FormGroup({
    documentType: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    documentNumber: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    firstName: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    lastName: new FormControl('', {
      nonNullable: true,
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.email],
    }),
    phone: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.pattern(/^\d{9,15}$/)],
    }),
    address: new FormControl('', {
      nonNullable: true,
    }),
    jobRole: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    area: new FormControl('', {
      nonNullable: true,
    }),
    startDate: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    status: new FormControl<'active' | 'inactive'>('active', {
      nonNullable: true,
    }),
  });
  protected documentTypes: SelectedItem<TypeIdentityDocument>[] = LIST_DOCUMENT_TYPES;
  protected jobRoles: SelectedItem<string>[] = LIST_JOB_ROLES;
  protected areas: SelectedItem<string>[] = LIST_AREAS;

  constructor() {
    effect(() => {
      const value = this.initialValue();

      if (value) {
        this.form.patchValue(value);
      }
    });
  }

  protected submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.formSubmit.emit(this.form.getRawValue());
  }

  protected cancel(): void {
    this.formCancel.emit();
  }
}
