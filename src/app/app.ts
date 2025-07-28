import { Component, signal, effect, OnInit } from '@angular/core';
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
import { Title } from "@angular/platform-browser";

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
export class App implements OnInit {
  protected readonly defaultTitle = 'Koshercheto';
  showScrollTop = false;

  private sectionTitles: { [key: string]: string } = {
    'about': 'За нас',
    'program': 'Програма',
    'gallery': 'Галерия',
    'documents': 'Документи',
    'contact': 'Контакти',
    'sendMessage': 'Изпратете съобщение'
  };

  constructor(private titleService: Title) {
    let scrollTimeout: any;
    window.addEventListener('scroll', () => {
      this.showScrollTop = window.scrollY > 150;
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        this.updateTitleOnScroll();
      }, 50);
    });
  }

  ngOnInit() {
    this.updateTitleOnScroll();
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  public updateTitleOnNavigation(sectionId: string) {
    if (this.sectionTitles[sectionId]) {
      this.titleService.setTitle(this.sectionTitles[sectionId] + ' | ' + this.defaultTitle);
    } else {
      this.titleService.setTitle(this.defaultTitle);
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  private updateTitleOnScroll() {
    let currentSectionId: string | null = null;
    const sections = document.querySelectorAll('section[id]');
    const offset = 225;
    const scrollPosition = window.scrollY;

    for (let i = sections.length - 1; i >= 0; i--) {
      const sectionElement = sections[i] as HTMLElement;
      const sectionTop = sectionElement.offsetTop;
      const sectionBottom = sectionElement.offsetTop + sectionElement.offsetHeight;

      if (sectionTop <= scrollPosition + offset && sectionBottom > scrollPosition + offset) {
        currentSectionId = sectionElement.id;
        break; 
      }
    }

    if (currentSectionId && this.sectionTitles[currentSectionId]) {
      this.titleService.setTitle(this.sectionTitles[currentSectionId] + ' | ' + this.defaultTitle);
    } else {

      this.titleService.setTitle(this.defaultTitle);
    }
  }
}


