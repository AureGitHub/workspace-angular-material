import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
import { BehaviorSubject, Observable, tap } from 'rxjs';

export interface AuthResponse {
    data : {
        token: string;  
        user: any;
    }
}

export interface User {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  phone?: string;
  profile_id: number;
  is_active: boolean;
  email_verified: boolean;
  created_at: string;
  updated_at: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly storageKey = 'auth_user';

  usuarioSubject = new BehaviorSubject<User | null>(null);

  constructor(private api: ApiService) {}

  login(credentials: { email: string; password: string }): Observable<AuthResponse> {
    return this.api.post<AuthResponse>('/auth/login', credentials).pipe(
      tap(res => {
        localStorage.setItem(this.storageKey, JSON.stringify(res?.data));
        this.usuarioSubject.next(this. getUser());
      })
    );
  }

  register(data: { email: string; password: string; [key: string]: any }): Observable<AuthResponse> {
    return this.api.post<AuthResponse>('/auth/register', data).pipe(
      tap(res => {
        localStorage.setItem(this.storageKey, JSON.stringify(res));
      })
    );
  }

  logout(): void {
    localStorage.removeItem(this.storageKey);
    this.usuarioSubject.next(null);
  }

  getUser(): User | null {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data).user : null;
  }

  getToken(): string | null {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data).token : null;
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
