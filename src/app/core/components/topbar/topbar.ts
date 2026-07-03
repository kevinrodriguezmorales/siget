import { Component } from '@angular/core';
import { MATERIAL_IMPORTS } from '@shared/material/material-imports';

@Component({
  selector: 'topbar',
  imports: [...MATERIAL_IMPORTS],
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss',
})
export class Topbar {}
