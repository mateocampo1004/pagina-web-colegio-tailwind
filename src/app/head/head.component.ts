import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-head',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent {
  menuVisible = false;
currentImageIndex: number=0;
images: string[] = [   'assets/imagenes/1_carrusel_oferta_academica.jpg',
'assets/imagenes/2_carrusel_Inicial II.png',
'assets/imagenes/3_carrusel_Edu_general_Edu_general.png',
'assets/imagenes/4_carrusel_Bachi_ciencias.png',
'assets/imagenes/5_carrusel_bachi_informatico.png',
'assets/imagenes/6_carrusel_extracurriculares.png',
'assets/imagenes/7_carrusel_servicios_servicios.png',];

prevSlide() {
  this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
}

nextSlide() {
  this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
}
  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }
}
