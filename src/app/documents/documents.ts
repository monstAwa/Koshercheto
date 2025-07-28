import { Component } from '@angular/core';
import { Meta } from "@angular/platform-browser";

@Component({
  selector: 'app-documents',
  imports: [],
  templateUrl: './documents.html',
  styleUrl: './documents.scss'
})
export class Documents {
  constructor(private meta: Meta) {
    //Мета тагове за SEO
    this.meta.addTags([
      {
        name: 'description',
        content: 'Изтеглете и качете необходимите документи за записване в частна занималня „Кошерчето“. Лесен достъп до формуляри и декларации.'
      },
      {
        name: 'keywords',
        content: 'документи, записване, формуляри, декларация, здравна информация, занималня Кошерчето, документи за занималня'
      },
      // Open Graph тагове за секция "Документи"
      { property: 'og:title', content: 'Документи | Частна занималня Кошерчето' },
      { property: 'og:description', content: 'Може да свалите всички необходими документи за записване на вашето дете.' },
      { property: 'og:image', content: 'https://koshercheto.com/images/og-koshercheto.jpg' },
      { property: 'og:url', content: 'https://koshercheto.com/#documents' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Частна занималня Кошерчето' },
    ]);
  }
}
