import { Component, Input, ChangeDetectorRef, NgZone, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ComponentBase } from '../components/component.base';
import { UserDialogComponent } from '../auth/user-dialog.component';
import { LoginDialogComponent } from '../auth/login-dialog.component';


@Component({
  selector: 'sl-layout',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatDialogModule, UserDialogComponent],
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
          <mat-icon [ngClass]="user?.is_active ? 'connected' : 'disconnected'" (click)="openLoginDialog()" style="cursor:pointer;">
            {{ user?.is_active ? 'person' : 'person_off' }}
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
  styles: [`
    .layout {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #1976d2;
      color: white;
      padding: 0.5rem 1rem;
    }
    .header-left {
      flex: 1;
      text-align: left;
    }
    .header-center {
      flex: 2;
      text-align: center;
    }
    .header-right {
      flex: 1;
      text-align: right;
    }
    .app-title {
      font-weight: bold;
      font-size: 1.2rem;
    }
    .page-title {
      font-size: 1.1rem;
    }
    .connected {
      color: #43a047;
    }
    .disconnected {
      color: #e53935;
    }
    .content {
      flex: 1;
      padding: 1rem;
    }
    .footer {
      background: #eee;
      text-align: center;
      padding: 0.5rem;
      font-size: 0.9rem;
    }
  `]
})
export class LayoutComponent extends ComponentBase implements OnInit {
  @Input() appTitle: string = '';
  @Input() pageTitle: string = '';  


  constructor(private dialog: MatDialog, public override auth: AuthService, private changeDetector: ChangeDetectorRef, private ngZone: NgZone) {
      super(auth);
  }

  ngOnInit(): void {
    
  }

  openLoginDialog(): void {
    if (!this.user?.is_active) {
      const dialogRef = this.dialog.open(LoginDialogComponent);
      dialogRef.componentInstance.login.subscribe((credentials: { email: string; password: string }) => {
        this.auth.login(credentials).subscribe({
          next: () => {
            this.ngZone.run(() => {
              dialogRef.close();
              this.changeDetector.detectChanges();
            });
          },
          error: (err: any) => {
            this.ngZone.run(() => {
              if (err.status === 0) {
                dialogRef.componentInstance.setError('Error de conexión. Inténtalo de nuevo más tarde.');
              } else {
                dialogRef.componentInstance.setError('Usuario o contraseña incorrectos');
              }
              this.changeDetector.detectChanges();
            });
          }
        });
      });
    } else {
      const userDialogRef = this.dialog.open(UserDialogComponent);
      userDialogRef.afterClosed().subscribe((result: any) => {
        if (result === true) {
          this.ngZone.run(() => {
            this.auth.logout();
            this.changeDetector.detectChanges();
          });
        }
      });
    }
  }
}
