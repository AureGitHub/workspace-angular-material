import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slEnum, SlButtonComponent, SlComboComponent, ComponentBase } from 'shared-lib';

@Component({
  selector: 'app-root',
  imports: [SlButtonComponent, SlComboComponent],
  template: `
  <sl-button [incon]="iconCancel" [color]="colorWarn" [label]="'danger'" (click)="eventClick()"></sl-button>
   <sl-combo
        [label]="'Selecciona una opción'"
        [options]="comboOptions"
        [selected]="selectedCombo"
        (change)="onComboChange($event)"
      ></sl-combo>
  `,
  
})
export class App extends ComponentBase {


eventClick() {
  
alert('Method not implemented.');
}
  protected readonly title = signal('app-trading');

  comboOptions = [
    { value: 'opcion1', viewValue: 'Opción 1' },
    { value: 'opcion2', viewValue: 'Opción 2' },
    { value: 'opcion3', viewValue: 'Opción 3' }
  ];
  selectedCombo = 'opcion1';
  onComboChange = (value: string) => {
    this.selectedCombo = value;
  };
}
