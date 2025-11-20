import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CommonModule } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'sl-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatSortModule],
  template: `
    <div class="table-container">
      <table mat-table [dataSource]="dataSource" matSort class="mat-elevation-z8">
        <ng-container *ngFor="let col of columns" [matColumnDef]="col.key">
            <th mat-header-cell *matHeaderCellDef mat-sort-header
              style="background:#42a5f5;color:#fff;font-weight:bold;font-size:1rem;letter-spacing:0.5px;border-color:#42a5f5;">
            {{ col.header }}
          </th>
          <td mat-cell *matCellDef="let element">{{ element[col.key] }}</td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns;"
            [ngStyle]="{cursor: 'pointer'}"
            (mouseenter)="rowHover = $event.target; rowHover.style.background='#e3f2fd'"
            (mouseleave)="rowHover = $event.target; rowHover.style.background=''">
        </tr>
      </table>
      <mat-paginator *ngIf="paginator" #paginatorRef [length]="data.length || 0" [pageSize]="pageSize" [pageSizeOptions]="pageSizeOptions"></mat-paginator>
    </div>
  `,
  styles: [`
    .table-container {
      width: 100%;
      overflow-x: auto;
      margin: 1rem 0;
    }
    .header-headline-font {
      font-weight: bold;
    }
    
    // table {
    //   width: 100%;
    //   min-width: 400px;
    //   border-collapse: collapse;
    // }
    // th.mat-header-cell, td.mat-cell {
    //   padding: 0.5rem 1rem;
    //   border: 1px solid #bdbdbd !important;
    // }
    // tr.mat-header-row, tr.mat-row {
    //   border-bottom: 1px solid #bdbdbd !important;
    // }
    // table {
    //   border: 1px solid #bdbdbd !important;
    // }
    // ::ng-deep th.mat-header-cell {
    //   background: #1976d2 !important;
    //   color: #fff !important;
    //   font-weight: bold !important;
    //   font-size: 1rem !important;
    //   letter-spacing: 0.5px !important;
    //   border-color: #1976d2 !important;
    // }
      tr.mat-row:nth-child(even) {
        background: #fafafa;
      }
      ::ng-deep tr.mat-row:hover {
        background: #e3f2fd !important;
        transition: background 0.2s;
      }
  `]
})
export class TableComponent implements AfterViewInit {
  @Input() columns: Array<{ key: string; header: string }> = [];
  @Input() paginator = false;
  @Input() pageSize = 10;
  @Input() pageSizeOptions: number[] = [5, 10, 20];

  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatPaginator) paginatorRef!: MatPaginator;

  @Input() set data(value: any[]) {
    this.dataSource.data = value || [];
    if (this.paginatorRef) {
      this.dataSource.paginator = this.paginatorRef;
    }
  }
  get data() {
    return this.dataSource.data;
  }

  get displayedColumns() {
    return this.columns.map(col => col.key);
  }

  rowHover: any;

  ngAfterViewInit() {
    if (this.paginatorRef) {
      this.dataSource.paginator = this.paginatorRef;
    }
  }
}
