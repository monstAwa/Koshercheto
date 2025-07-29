import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta } from "@angular/platform-browser";

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  teachers = [
    {
      name: 'Мария Иванова',
      title: 'Педагог начален курс',
      photo: 'images/bee-f.jpg',
      bio: 'С дългогодишен опит в работата с деца и страст към обучението чрез игра.'
    },
    {
      name: 'Георги Петров',
      title: 'Арт педагог',
      photo: 'images/bee-m.jpg',
      bio: 'Обича да развива творчеството и въображението на децата чрез изкуство.'
    }
  ];

  constructor(private meta: Meta) {
    // Мета тагoве за SEO
    this.meta.addTags([
      {
        name: 'description',
        content: 'Частна занималня „Кошерчето“ предлага целодневни и почасови занимания за деца в уютна и стимулираща среда. Нашият екип от професионалисти насърчава ученето чрез игра, творчество и индивидуално внимание.'
      },
      {
        name: 'keywords',
        content: 'занималня, частна занималня, детска занималня, занимания за деца, Кошерчето, ученически занимания, обучение чрез игра, почасови грижи, следобедни занимания, детски клуб'
      },
      // Open Graph тагове за секция "За нас"
      { property: 'og:title', content: 'За нас | Частна занималня Кошерчето' },
      { property: 'og:description', content: 'Частна занималня „Кошерчето“ предлага целодневни и почасови занимания за деца в уютна и стимулираща среда. Насърчаваме ученето чрез игра.' },
      { property: 'og:image', content: 'https://koshercheto.com/images/og-koshercheto.jpg' },
      { property: 'og:url', content: 'https://koshercheto.com/#about' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Частна занималня Кошерчето' },
    ]);
  }
}