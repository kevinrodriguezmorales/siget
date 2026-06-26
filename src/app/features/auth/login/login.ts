import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MATERIAL_IMPORTS } from '@shared/material/material-imports';

@Component({
  selector: 'login',
  imports: [...MATERIAL_IMPORTS, MatFormFieldModule, MatInputModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {}
