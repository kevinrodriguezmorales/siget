import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth';

  constructor(private _http: HttpClient) {}

  public login(data: { username: string; password: string }) {
    return this._http.post(`${this.apiUrl}/login`, data, { responseType: 'text' });
  }

  public saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  public getToken(): string | null {
    return localStorage.getItem('token');
  }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  public logout() {
    localStorage.removeItem('token');
  }
}
