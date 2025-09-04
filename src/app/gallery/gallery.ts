import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss'
})

export class Gallery {
  imagesData = [
    { src: 'images/img_outside.jpg', alt: 'Входа на занималнята'},
    { src: 'images/img_outside2.jpg', alt: 'Входа на занималнята'}, 
    { src: 'images/img_outside3.jpg', alt: 'Входа на занималнята'}, 
    { src: 'images/img_inside1.jpg', alt: 'Интериор на занималнята'},
    { src: 'images/img_inside2.jpg', alt: 'Интериор на занималнята'}, 
    { src: 'images/img_inside3.jpg', alt: 'Интериор на занималнята'} 
  ];

  constructor() {

  }
}