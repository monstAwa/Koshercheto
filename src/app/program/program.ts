import { Component } from '@angular/core';
import { Meta } from "@angular/platform-browser";

@Component({
  selector: 'app-program',
  imports: [],
  templateUrl: './program.html',
  styleUrl: './program.scss'
})
export class Program {
  constructor(private meta: Meta) {
    //Мета тагове за SEO
    this.meta.addTags([
      {
        name: 'description',
        content: 'Запознайте се с дневната програма в частна занималня „Кошерчето“ – учебни и творчески дейности, игри, отдих и пълноценна грижа за децата.'
      },
      {
        name: 'keywords',
        content: 'програма, дневен режим, занимания, учебна програма, занималня, деца, игри, дейности, Кошерчето'
      },
      // Open Graph тагове за секция "Програма"
      { property: 'og:title', content: 'Програма | Частна занималня Кошерчето' },
      { property: 'og:description', content: 'Може да видите програмата на Частна занималня "Кошерчето" за сутрешна и следобедна смяна' },
      { property: 'og:image', content: 'https://koshercheto.com/images/og-koshercheto.jpg' },
      { property: 'og:url', content: 'https://koshercheto.com/#program' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Частна занималня Кошерчето' },
    ]);
  }
}
