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
    { src: 'images/comming-soon2.jpg', alt: 'Деца играят'}, //Да се добави alt
    { src: 'images/comming-soon2.jpg', alt: 'Деца играят'}, //Да се добави alt
    { src: 'images/comming-soon2.jpg', alt: 'Деца играят'}, //Да се добави alt
    { src: 'images/comming-soon2.jpg', alt: 'Деца играят'}, //Да се добави alt
    { src: 'images/comming-soon2.jpg', alt: 'Деца играят'}, //Да се добави alt
    { src: 'images/comming-soon2.jpg', alt: 'Деца играят'}  //Да се добави alt
  ];

  constructor() {

  }
}