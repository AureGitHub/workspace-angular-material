import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LoginDialogComponent } from '../dialog/login-dialog.component';

@Component({
  selector: 'sl-layout',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatDialogModule],
  template: `
    <div class="layout">
      <header class="header">
        <div class="header-left">
          <span class="app-title">{{ appTitle }}</span>
        </div>
        <div class="header-center">
          <span class="page-title">{{ pageTitle }}</span>
        </div>
        <div class="header-right">
          <mat-icon [ngClass]="userConnected ? 'connected' : 'disconnected'" (click)="openLoginDialog()" style="cursor:pointer;">
            {{ userConnected ? 'person' : 'person_off' }}
          </mat-icon>
        </div>
      </header>
      <main class="content">
        <ng-content></ng-content>
      </main>
      <footer class="footer">
        <span>© 2025 - Todos los derechos reservados</span>
      </footer>
    </div>
  `,
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  @Input() appTitle: string = '';
  @Input() pageTitle: string = '';
  userConnected: boolean = false;

  constructor(private dialog: MatDialog) {
    this.userConnected = false;
  }

  openLoginDialog() {
    if (!this.userConnected) {
      this.dialog.open(LoginDialogComponent);
    }
  }
}
