import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { About } from './about/about';
import { Program } from './program/program';
import { Gallery } from './gallery/gallery';
import { Contact } from './contact/contact';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { sendMessage } from './sendMessage/sendMessage';
import { ReactiveFormsModule } from '@angular/forms';
import { PricesAndDocuments } from './prices-and-documents/prices-and-documents';
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
    Documents,
    PricesAndDocuments,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit, OnDestroy {
  protected readonly defaultTitle = 'Частна Занималня Кошерчето';
  showScrollTop = false;
  sideMenuOpen = false;
  showSideMenuToggle = false;
  showCookieConsent = false;

  private sectionTitles: { [key: string]: string } = {
    'about': 'За нас',
    'program': 'Програма',
    'gallery': 'Галерия',
    'prices': 'Цени',
    'documents': 'Документи за записване',
    'contact': 'Контакти',
    'sendMessage': 'Изпратете съобщение'
  };

  private headerOffset = 0;
  private resizeObserver: ResizeObserver | undefined;

  constructor(private titleService: Title) {
    this.showCookieConsent = !localStorage.getItem('cookieConsentAccepted');

    window.addEventListener('scroll', () => {
      this.showScrollTop = window.scrollY > 150;
      this.showSideMenuToggle = window.scrollY > 150 && !this.sideMenuOpen;
      this.updateTitleOnScroll();
    });

    setTimeout(() => {
      this.calculateHeaderOffset();
      const headerElement = document.querySelector('app-header header') as HTMLElement;
      if (headerElement && typeof ResizeObserver !== 'undefined') {
        this.resizeObserver = new ResizeObserver(() => {
          this.calculateHeaderOffset();
        });
        this.resizeObserver.observe(headerElement);
      } else {
        window.addEventListener('resize', () => {
          this.calculateHeaderOffset();
        });
      }
    }, 0);
  }

  ngOnInit() {
    this.updateTitleOnScroll();
    if (this.showCookieConsent) {
      this.adjustBodyPaddingForCookieBanner(true);
    }
  }

  ngOnDestroy() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
    this.adjustBodyPaddingForCookieBanner(false);
  }

  private calculateHeaderOffset() {
    const headerElement = document.querySelector('app-header header') as HTMLElement;
    if (headerElement) {
      this.headerOffset = headerElement.offsetHeight;
    }
  }

  toggleSideMenu() {
    this.sideMenuOpen = !this.sideMenuOpen;
    this.showSideMenuToggle = !this.sideMenuOpen && window.scrollY > 150;

  }

  navigateToSectionFromSideMenu(sectionId: string) {
    this.updateTitleOnNavigation(sectionId); 
    this.toggleSideMenu(); 
  }

  acceptCookies() {
    localStorage.setItem('cookieConsentAccepted', 'true');
    this.showCookieConsent = false;
    this.adjustBodyPaddingForCookieBanner(false);
  }

  private adjustBodyPaddingForCookieBanner(addPadding: boolean) {
    const body = document.body;
    const cookieBannerHeight = this.showCookieConsent ? 70 : 0;
    if (addPadding) {
      body.style.paddingBottom = `${cookieBannerHeight}px`;
    } else {
      body.style.paddingBottom = '0px';
    }
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
      const elementTop = element.getBoundingClientRect().top + window.scrollY;

      let finalScrollPosition = elementTop - this.headerOffset;

      const scrollDownOffsetDesktop = 250; 
      const scrollDownOffsetMobile = 375;  

      if (window.innerWidth > 768) { 
        finalScrollPosition += scrollDownOffsetDesktop; 
      } else { 
        finalScrollPosition += scrollDownOffsetMobile; 
      }

      if (finalScrollPosition < 0) {
        finalScrollPosition = 0;
      }

      window.scrollTo({
        top: finalScrollPosition,
        behavior: 'smooth'
      });
    }
    const headerComponent = document.querySelector('app-header') as any;
    if (headerComponent && headerComponent.closeMenu) {
      headerComponent.closeMenu();
    }
  }

  private updateTitleOnScroll() {
    let currentSectionId: string | null = null;
    const sections = document.querySelectorAll('section[id]');

    let offset = this.headerOffset;
    
    const activeSectionOffsetDesktop = 50;
    const activeSectionOffsetMobile = 30;

    if (window.innerWidth > 768) {
      offset += activeSectionOffsetDesktop;
    } else {
      offset += activeSectionOffsetMobile;
    }

    for (let i = sections.length - 1; i >= 0; i--) {
      const sectionElement = sections[i] as HTMLElement;
      const rect = sectionElement.getBoundingClientRect();

      if (rect.top <= offset && rect.bottom > offset) {
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