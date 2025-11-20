import { Component, Output, EventEmitter, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { LIB_ENVIRONMENT } from '../services/lib-environment.token';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'sl-login-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule],
  template: `
    <div style="margin: 24px;">
      <div style="display: flex; align-items: center; justify-content: center; position: relative;">
        <h2 style="margin: 0 auto; text-align: center; flex: 1;">Iniciar sesión</h2>
        <button mat-icon-button (click)="close()" aria-label="Cerrar" style="position: absolute; right: 0;">
          <mat-icon>close</mat-icon>
        </button>
      </div>
      <form #loginForm="ngForm" (ngSubmit)="submit(loginForm)">
        <mat-form-field appearance="fill" style="width: 100%;">
          <mat-label>Email</mat-label>
          <input matInput type="email" [(ngModel)]="email" name="email" required email />
          <mat-error *ngIf="loginForm.controls['email']?.touched && loginForm.controls['email']?.errors?.['required']">El email es obligatorio</mat-error>
          <mat-error *ngIf="loginForm.controls['email']?.touched && loginForm.controls['email']?.errors?.['email']">Formato de email incorrecto</mat-error>
        </mat-form-field>
        <mat-form-field appearance="fill" style="width: 100%;">
          <mat-label>Contraseña</mat-label>
          <input matInput type="password" [(ngModel)]="password" name="password" required />
          <mat-error *ngIf="loginForm.controls['password']?.touched && loginForm.controls['password']?.errors?.['required']">La contraseña es obligatoria</mat-error>
        </mat-form-field>
        <div *ngIf="errorMessage" style="color: #e53935; margin-bottom: 1rem; text-align: center;">
          {{ errorMessage }}
        </div>
        <div style="text-align: right; margin-top: 1rem;">
          <button mat-raised-button color="primary" type="submit" [disabled]="!loginForm.valid || loading">
            <mat-spinner *ngIf="loading" diameter="20"></mat-spinner>
            <span *ngIf="!loading">Entrar</span>
          </button>
        </div>
      </form>
    </div>
  `,
  styles: [
    `h2 {
      text-align: center;
      margin-bottom: 1rem;
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;
      min-width: 300px;
    }`
  ]
})
export class LoginDialogComponent {
  email: string = '';
  password: string = '';
  @Output() login = new EventEmitter<{ email: string; password: string }>();
  errorMessage: string = '';
  loading: boolean = false;

  constructor(
    private dialogRef: MatDialogRef<LoginDialogComponent>,
    @Inject(LIB_ENVIRONMENT) private env: 'dev' | 'prod'
  ) {
    if (this.env === 'dev') {
      this.email = 'aure@zarza.es';
      this.password = 'jas11jas11';
    }
  }

  submit(form: NgForm) {
    if (form.valid) {
      this.loading = true;
      console.log('Login emitido:', { email: this.email, password: this.password });
      this.login.emit({ email: this.email, password: this.password });
    }
  }

  setError(message: string) {
    this.errorMessage = message;
    this.loading = false;
  }

  close() {
    this.dialogRef.close();
  }
}
