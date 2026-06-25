import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private TOKEN_KEY = 'dashwatch_token';

  login(email: string, password: string): boolean {
    // fake auth (Day 1 MVP)
    if (email && password) {
      localStorage.setItem(this.TOKEN_KEY, 'mock-token');
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }
}