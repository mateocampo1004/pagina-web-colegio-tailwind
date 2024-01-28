import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeadComponent } from './head/head.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HeadComponent,MainComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'trabajo-en-clase';
  menuVisible: boolean = false;

  images = [
    'assets/imagenes/1_carrusel_oferta_academica.jpg',
    'assets/imagenes/2_carrusel_Inicial II.png',
    'assets/imagenes/3_carrusel_Edu_general_Edu_general.png',
    'assets/imagenes/4_carrusel_Bachi_ciencias.png',
    'assets/imagenes/5_carrusel_bachi_informatico.png',
    'assets/imagenes/6_carrusel_extracurriculares.png',
    'assets/imagenes/7_carrusel_servicios_servicios.png',
  ];

  currentImageIndex = 0;
  intervalId: any;

  ngOnInit() {
    this.startCarousel();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startCarousel() {
    this.intervalId = setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    }, 4000); 
  }
  
  prevSlide() {
    if (this.currentImageIndex === 0) {
      this.currentImageIndex = this.images.length - 1;
    } else {
      this.currentImageIndex--;
    }
  }

  nextSlide() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

  toggleMenu(): void {
    this.menuVisible = !this.menuVisible;
  }
}

