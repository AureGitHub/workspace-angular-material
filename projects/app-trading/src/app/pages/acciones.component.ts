import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutService } from 'shared-lib';
import { TableComponent } from 'shared-lib';

@Component({
  selector: 'app-acciones',
  standalone: true,
  imports: [CommonModule, RouterModule, TableComponent],
  template: `
    <div class="acciones-container">
      <h1>Consulta de acciones</h1>
      <p>Aquí podrás ver información y cotizaciones de acciones.</p>
      <sl-table
        [columns]="columns" 
        [data]="data"
        [paginator]="true"
        [pageSize]="2"
        [pageSizeOptions]="[5, 10, 20]"
      ></sl-table>
      <button class="volver-btn" routerLink="/home">Volver al Home</button>
    </div>
  `,
  styles: [`
    .acciones-container {
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

export class AccionesComponent {
  columns = [
    { key: 'symbol', header: 'Símbolo' },
    { key: 'name', header: 'Nombre' },
    { key: 'price', header: 'Precio' }
  ];
  data = [
    { symbol: 'AAPL', name: 'Apple Inc.', price: 189.12 },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 132.45 },
    { symbol: 'MSFT', name: 'Microsoft Corp.', price: 374.23 },
    { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 145.67 },
    { symbol: 'TSLA', name: 'Tesla Inc.', price: 234.56 },
    { symbol: 'META', name: 'Meta Platforms', price: 312.78 }
  ];
  constructor(private layout: LayoutService) {
    this.layout.setPageTitle('Consulta de acciones');
  }
}
