import { Component } from '@angular/core';
import { Meta } from "@angular/platform-browser";

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  constructor(private meta: Meta) {
    //Мета тагове  за SEO
    this.meta.addTags([
      {
        name: 'description',
        content: 'Свържете се с частна занималня „Кошерчето“. Адрес, телефон, имейл и форма за контакт. Очакваме ви с усмивка!'
      },
      {
        name: 'keywords',
        content: 'контакти, занималня адрес, Кошерчето контакти, частна занималня, детска занималня, детска грижа, телефон на занималня'
      },
      // Open Graph тагове за секция "Контакти"
      { property: 'og:title', content: 'Контакти | Частна занималня Кошерчето' },
      { property: 'og:description', content: 'Свържете с нас за въпроси и запитвания. Винаги сме насреща и ви очакваме!' },
      { property: 'og:image', content: 'https://koshercheto.com/images/og-koshercheto.jpg' },
      { property: 'og:url', content: 'https://koshercheto.com/#contact' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Частна занималня Кошерчето' },
    ]);
  }
}
