import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AuthService, User } from '../auth/auth.service';
import { ComponentBase } from '../components/component.base';

@Component({
  selector: 'sl-user-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  template: `
    <div style="margin: 24px; min-width: 300px;">
      <h2 style="text-align: center;">Datos de usuario</h2>
      <div style="margin-bottom: 1rem;">
        <strong>Email:</strong> {{ user?.email }}<br>
        <strong>Perfil:</strong> {{ user?.profile_id || 'N/A' }}
      </div>
      <div style="display: flex; justify-content: flex-end; gap: 8px;">
        <button mat-stroked-button color="primary" (click)="close()">Cerrar ventana</button>
        <button mat-raised-button color="warn" (click)="logout()">Cerrar sesión</button>
      </div>
    </div>
  `
})
export class UserDialogComponent extends ComponentBase {

  constructor(
    private dialogRef: MatDialogRef<UserDialogComponent>,
    public override auth: AuthService
  ) {
      super(auth);
  }

  logout() {
    this.auth.logout();
    this.dialogRef.close(true);
  }

  close() {
    this.dialogRef.close(false);
  }
}
