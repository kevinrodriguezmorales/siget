import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { MATERIAL_IMPORTS } from '@shared/material/material-imports';

@Component({
  selector: 'login',
  imports: [...MATERIAL_IMPORTS, FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  protected username: string = '';
  protected password: string = '';
  protected mensajeError: string = '';
  protected hidePassword = true;

  constructor(
    private _auth: AuthService,
    private _router: Router,
  ) {}

  protected login(): void {
    this._auth
      .login({
        username: this.username,
        password: this.password,
      })
      .subscribe({
        next: (token) => {
          this._auth.saveToken(token);
          this._router.navigate(['/inicio']);
        },
        error: (err) => {
          if (err.status === 401) {
            this.mensajeError = 'Usuario o contraseña incorrectos';
          } else {
            this.mensajeError = 'Error del servidor';
            
          }
        },
      });
  }

  protected togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }
}
