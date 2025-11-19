import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'lib-primeng-demo',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './primeng-demo.html',
  styleUrls: ['./primeng-demo.css']
})
export class PrimengDemo {
  showAlert() {
    alert('¡Botón PrimeNG funcionando!');
  }
}
