import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { AuthService, ComponentBase, LayoutService } from 'shared-lib';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, MatIconModule, RouterModule],
    template: `
    <div class="home-container">
      <h1>Bienvenido a App Trading</h1>
      <div class="card-list"  *ngIf="user?.is_active">
        <button class="card card-btn" routerLink="/acciones">
          <mat-icon class="card-icon">trending_up</mat-icon>
          <h2>Consulta de acciones</h2>
          <p>Ver información y cotizaciones de acciones.</p>
        </button>
     
        <div *ngIf="user?.isAdmin" class="card" routerLink="/cartera">
          <mat-icon class="card-icon">account_balance_wallet</mat-icon>
          <h2>Gestión de cartera</h2>
          <p>Administra tu cartera de inversiones.</p>
        </div>
      </div>
    </div>
  `,
    styles: [`
    .home-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      min-height: 60vh;
      padding: 2rem;
    }
    h1 {
      color: #1976d2;
      margin-bottom: 2rem;
      font-size: 2rem;
    }
    .card-list {
      display: flex;
      gap: 2rem;
      margin-top: 2rem;
      flex-wrap: wrap;
      justify-content: center;
    }
         .card, .card-btn {
      background: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
      padding: 1rem 0.7rem;
      min-width: 140px;
      max-width: 200px;
      width: 100%;
      box-sizing: border-box;
           cursor: pointer;
           border: none;
           outline: none;
      transition: box-shadow 0.2s;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin-bottom: 2rem;
    }
    @media (max-width: 700px) {
      .card-list {
        flex-direction: column;
        gap: 1.5rem;
      }
      .card {
        min-width: 180px;
        max-width: 100%;
        padding: 1.2rem 0.8rem;
      }
    }
    .card:hover {
      box-shadow: 0 4px 16px rgba(25, 118, 210, 0.15);
      background: #f5faff;
    }
    .card-icon {
      font-size: 1.6rem;
      color: #1565c0;
      margin-bottom: 0.3rem;
      filter: drop-shadow(0 1px 2px rgba(25, 118, 210, 0.18));
    }
    .card h2 {
      margin-bottom: 0.5rem;
      color: #1976d2;
      font-size: 1rem;
    }
    .card p {
      color: #555;
      font-size: 0.85rem;
    }
  `]
})
export class HomeComponent extends ComponentBase {
    constructor(auth: AuthService, private layout: LayoutService) {
      super(auth);
      this.layout.setPageTitle('Página principal');
    }
}
