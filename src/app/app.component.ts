import { Component } from '@angular/core';
import { HeladosComponent } from './helados/helados.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeladosComponent],
  template: `
    <h1>Bienvenido a la Tienda de Helados 🍦</h1>
    <app-helados></app-helados>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}







