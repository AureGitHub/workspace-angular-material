import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentBase, LayoutComponent,LayoutService } from 'shared-lib';
import { AuthService } from 'shared-lib';

@Component({
  selector: 'app-root',
  imports: [LayoutComponent, RouterOutlet],
  template: `
    <sl-layout
      [appTitle]="'App Trading'"
      [pageTitle]="pageTitle"
    >
      <router-outlet></router-outlet>
    </sl-layout>
  `,
})
export class App extends ComponentBase {
  pageTitle = 'Página principal';
  constructor(public override auth: AuthService, public layout: LayoutService) {
    super(auth);
    this.layout.pageTitle$.subscribe(title => {
      this.pageTitle = title;
    });
  }
}
