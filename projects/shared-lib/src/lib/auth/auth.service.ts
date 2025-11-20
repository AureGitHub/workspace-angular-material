import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
import { BehaviorSubject, Observable, tap } from 'rxjs';

export interface AuthResponse {
    data : {
        token: string;  
        user: User;
    }
}


export enum Rol {
  admin = 1,
  owner = 2,
  tenant = 3
}
export interface User {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  phone?: string;
  profile_id: number;
  
  email_verified: boolean;
  created_at: string;
  updated_at: string;
  
  is_active: boolean;
  isAdmin: boolean
  isUser: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly storageKey = 'auth_user';

  usuarioSubject = new BehaviorSubject<User | null>(this.getUser());

  constructor(private api: ApiService) {
    // Al iniciar el servicio, aseguramos que el usuarioSubject refleje el usuario guardado
    this.usuarioSubject.next(this.getUser());
  }

  login(credentials: { email: string; password: string }): Observable<AuthResponse> {
    return this.api.post<AuthResponse>('/auth/login', credentials).pipe(
      tap(res => {        
        res.data.user.isAdmin = res?.data?.user?.profile_id == Rol.admin;
        res.data.user.isUser = res?.data?.user?.profile_id != Rol.admin;
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
