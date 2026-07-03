import { Component, Input } from '@angular/core';
import { MATERIAL_IMPORTS } from '@shared/material/material-imports';

@Component({
  selector: 'inner-toolbar',
  imports: [...MATERIAL_IMPORTS],
  templateUrl: './inner-toolbar.html',
  styleUrl: './inner-toolbar.scss',
})
export class InnerToolbar { }
