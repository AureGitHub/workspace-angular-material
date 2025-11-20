import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutService } from 'shared-lib';

@Component({
  selector: 'app-cartera',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="cartera-container">
      <h1>Gestión de cartera</h1>
      <p>Aquí podrás administrar tu cartera de inversiones.</p>
      <button class="volver-btn" routerLink="/home">Volver al Home</button>
    </div>
  `,
  styles: [`
    .cartera-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      min-height: 60vh;
      padding: 2rem;
    }
    h1 {
      color: #1976d2;
      margin-bottom: 1.5rem;
      font-size: 1.5rem;
    }
    p {
      font-size: 1rem;
      color: #555;
      margin-bottom: 2rem;
    }
    .volver-btn {
      background: #1976d2;
      color: #fff;
      border: none;
      border-radius: 4px;
      padding: 0.5rem 1.2rem;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.2s;
    }
    .volver-btn:hover {
      background: #1565c0;
    }
  `]
})
export class CarteraComponent {
  constructor(private layout: LayoutService) {
    this.layout.setPageTitle('Gestión de cartera');
  }
}
