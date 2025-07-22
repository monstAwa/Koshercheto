import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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
}
