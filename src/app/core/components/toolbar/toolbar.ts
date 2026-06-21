import { Component } from '@angular/core';
import { MATERIAL_IMPORTS } from '@shared/material/material-imports';

@Component({
  selector: 'toolbar',
  imports: [...MATERIAL_IMPORTS],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.scss',
})
export class Toolbar {}
