import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <div class="home-container">
      <h1>Bienvenido a App Trading</h1>
      <div class="card-list">
        <div class="card" routerLink="/acciones">
          <mat-icon class="card-icon">trending_up</mat-icon>
          <h2>Consulta de acciones</h2>
          <p>Ver información y cotizaciones de acciones.</p>
        </div>
        <div class="card" routerLink="/cartera">
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
    .card {
      background: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
      padding: 2rem 1.5rem;
      min-width: 220px;
      max-width: 320px;
      width: 100%;
      box-sizing: border-box;
      cursor: pointer;
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
      font-size: 3rem;
      color: #1976d2;
      margin-bottom: 0.5rem;
    }
    .card h2 {
      margin-bottom: 0.5rem;
      color: #1976d2;
      font-size: 1.3rem;
    }
    .card p {
      color: #555;
      font-size: 1rem;
    }
  `]
})
export class HomeComponent {}
