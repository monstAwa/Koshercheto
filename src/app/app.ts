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
export class App {
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
    // Използваме 'scroll' събитието, но ще го оптимизираме малко, за да не се изпълнява твърде често
    let scrollTimeout: any;
    window.addEventListener('scroll', () => {
      this.showScrollTop = window.scrollY > 150;
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        this.updateTitleOnScroll();
      }, 50); // Изпълнява се след 50ms пауза в скролването
    });
  }

  ngOnInit() {
    // Когато компонентът е инициализиран и DOM е наличен
    this.updateTitleOnScroll(); // Задаваме заглавието на първата видима секция при старт
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  private updateTitleOnScroll() {
    let currentSectionId: string | null = null;
    const sections = document.querySelectorAll('section[id]');
    // Използваме offset, за да определим кога една секция е достатъчно видима
    const offset = 225; // Можете да експериментирате с тази стойност
    const scrollPosition = window.scrollY;

    // Итерираме през секциите отдолу нагоре, за да намерим най-долната видима
    for (let i = sections.length - 1; i >= 0; i--) {
      const sectionElement = sections[i] as HTMLElement;
      const sectionTop = sectionElement.offsetTop;
      const sectionBottom = sectionElement.offsetTop + sectionElement.offsetHeight;

      // Проверяваме дали горната част на секцията е над или в рамките на видимия прозорец
      // и дали секцията е частично или напълно видима
      if (sectionTop <= scrollPosition + offset && sectionBottom > scrollPosition + offset) {
        currentSectionId = sectionElement.id;
        break; // Намерихме най-долната видима секция, спираме
      }
    }

    if (currentSectionId && this.sectionTitles[currentSectionId]) {
      this.titleService.setTitle(this.sectionTitles[currentSectionId] + ' | ' + this.defaultTitle);
    } else {
      // Ако по някаква причина не е намерена секция (напр. в самото начало на страницата),
      // върни към базовото заглавие или заглавието на първата секция.
      // В този случай, ако няма currentSectionId, ще остане defaultTitle.
      this.titleService.setTitle(this.defaultTitle);
    }
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
}


