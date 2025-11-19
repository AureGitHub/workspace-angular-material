import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MaterialButtonColor, MaterialButtonIcon } from '../../enums/shared-lib.enums';
import { ComponentBase } from '../component.base';

/*
Primario: Azul (#1976d2)
Acento: Rosa (#e91e63)  accent
Warn (advertencia): Rojo (#f44336) warn
*/

@Component({
  selector: 'sl-button',
  standalone: true,
  imports: [CommonModule,MatButtonModule,MatIconModule],
  template:  `
  <button 
     mat-raised-button      
     [color]="color"
     > 
     <mat-icon *ngIf="incon">{{incon}}</mat-icon>{{label}}
  </button>
   `,
  
})
export class SlButtonComponent extends ComponentBase {
  @Input() label='';
  @Input() incon = this.iconNone;
  @Input() color=this.colorPrimary;
}

