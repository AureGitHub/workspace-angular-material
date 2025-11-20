import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentBase, LayoutComponent } from 'shared-lib';
import { AuthService } from 'shared-lib';
@Component({
  selector: 'app-root',
  imports: [LayoutComponent, RouterOutlet],
  template: `
    <sl-layout
      [appTitle]="'App Trading'"
      [pageTitle]="'Página principal'"
    >
      <router-outlet></router-outlet>
    </sl-layout>
  `,
})
export class App extends ComponentBase {
  constructor( public override auth: AuthService){
    super(auth);
  }
}
