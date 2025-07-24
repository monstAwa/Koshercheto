import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss'
})

export class Gallery {
  images = [
    'https://picsum.photos/seed/1/800/600',
    'https://picsum.photos/seed/2/800/600',
    'https://picsum.photos/seed/3/800/600',
    'https://picsum.photos/seed/4/800/600',
    'https://picsum.photos/seed/5/800/600',
    'https://picsum.photos/seed/6/800/600'
  ];

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Галерия | Частна занималня Кошерчето');
    this.meta.addTags([
      {
        name: 'description',
        content: 'Разгледайте снимки от ежедневието в частна занималня „Кошерчето“. Вижте как децата учат, играят и се забавляват в топла и грижовна среда.'
      },
      {
        name: 'keywords',
        content: 'галерия, снимки, занималня, деца, игри, занимания, детска среда, Кошерчето, фотогалерия'
      }
    ]);
  }
}
