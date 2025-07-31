import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-about',
  imports: [],
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

  constructor() {
    
  }
}