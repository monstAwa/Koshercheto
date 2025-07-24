import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from "@angular/platform-browser";

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
      photo: 'images/maria.jpg',
      bio: 'С дългогодишен опит в работата с деца и страст към обучението чрез игра.'
    },
    {
      name: 'Георги Петров',
      title: 'Арт педагог',
      photo: 'images/georgi.jpg',
      bio: 'Обича да развива творчеството и въображението на децата чрез изкуство.'
    }
  ];

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle ('За нас | Частна занималня Кошерчето');
    this.meta.addTags([
      {
        name: 'description',
        content: 'Частна занималня „Кошерчето“ предлага целодневни и почасови занимания за деца в уютна и стимулираща среда. Нашият екип от професионалисти насърчава ученето чрез игра, творчество и индивидуално внимание.'
      },
      {
        name: 'keywords',
        content: 'занималня, частна занималня, детска занималня, занимания за деца, Кошерчето, ученически занимания, обучение чрез игра, почасови грижи, следобедни занимания, детски клуб'
      }
    ]);
  }
}
