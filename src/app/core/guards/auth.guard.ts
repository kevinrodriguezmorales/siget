import { Injectable } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(
    private _auth: AuthService,
    private _router: Router,
  ) {}

  public canActivate(): boolean {
    if (!this._auth.isAuthenticated()) {
      this._router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
