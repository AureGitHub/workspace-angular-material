import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimengDemo } from 'shared-lib';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PrimengDemo, MatButtonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app-trading');
}
