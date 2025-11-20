import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'sl-combo',
  imports: [CommonModule,  MatFormFieldModule, MatSelectModule],
  standalone:true,
  template: `
    <mat-form-field appearance="fill">
      <mat-label>{{label}}</mat-label>
      <mat-select [value]="selected" (selectionChange)="change.emit($event.value)">
        <mat-option *ngFor="let option of options" [value]="option.value">
          {{option.viewValue}}
        </mat-option>
      </mat-select>
    </mat-form-field>
  `
})
// ...existing code...
export class SlComboComponent {
  @Input() label: string = 'Selecciona';
  @Input() options: { value: string; viewValue: string }[] = [];
  @Input() selected: string = '';
  @Output() change = new EventEmitter<string>();
}
