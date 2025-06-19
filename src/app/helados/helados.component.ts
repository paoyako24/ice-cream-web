import { Component, AfterViewInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-helados',
  templateUrl: './helados.component.html',
  styleUrls: ['./helados.component.css']
})
export class HeladosComponent implements AfterViewInit {
  detallesVisibles = {
    vainilla: false,
    chocolate: false,
    fresa: false
  };

  ngAfterViewInit(): void {
    gsap.fromTo('.card', {
      opacity: 0,
      y: 50
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.3,
      ease: 'power3.out'
    });
  }

  mostrarInfo(sabor: 'vainilla' | 'chocolate' | 'fresa') {
    // Oculta los otros
    for (const key in this.detallesVisibles) {
      this.detallesVisibles[key as keyof typeof this.detallesVisibles] = false;
    }

    // Muestra el seleccionado
    this.detallesVisibles[sabor] = true;

    // Animación de GSAP
    const el = document.querySelector(`.detalles.${sabor}`);
    if (el) {
      gsap.fromTo(el, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.5 });
    }
  }
}

























