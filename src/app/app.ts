import { Component, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { About } from './about/about';
import { Program } from './program/program';
import { Gallery } from './gallery/gallery';
import { Contact } from './contact/contact';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { sendMessage } from './sendMessage/sendMessage';
import { ReactiveFormsModule } from '@angular/forms';
import { Documents } from "./documents/documents";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    About,
    Program,
    Gallery,
    Contact,
    Header,
    Footer,
    sendMessage,
    ReactiveFormsModule,
    Documents
],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('koshercheto-website');
  showScrollTop = false;

  constructor() {
    window.addEventListener('scroll', () => {
      this.showScrollTop = window.scrollY > 150;
    });
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}


