import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  imports: [CarouselModule.forRoot(), BrowserModule, NgModule, AppComponent],
})
export class AppModule {}