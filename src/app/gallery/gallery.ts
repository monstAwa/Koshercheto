import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta } from "@angular/platform-browser";

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss'
})

export class Gallery {
  imagesData = [
    { src: 'images/comming-soon2.jpg', alt: 'Деца играят'}, //Да се добави alt
    { src: 'images/comming-soon2.jpg', alt: 'Деца играят'}, //Да се добави alt
    { src: 'images/comming-soon2.jpg', alt: 'Деца играят'}, //Да се добави alt
    { src: 'images/comming-soon2.jpg', alt: 'Деца играят'}, //Да се добави alt
    { src: 'images/comming-soon2.jpg', alt: 'Деца играят'}, //Да се добави alt
    { src: 'images/comming-soon2.jpg', alt: 'Деца играят'}  //Да се добави alt
  ];

  constructor(private meta: Meta) {
    //Мета тагове за SEO
    this.meta.addTags([
      {
        name: 'description',
        content: 'Разгледайте снимки от ежедневието в частна занималня „Кошерчето“. Вижте как децата учат, играят и се забавляват в топла и грижовна среда.'
      },
      {
        name: 'keywords',
        content: 'галерия, снимки, занималня, деца, игри, занимания, детска среда, Кошерчето, фотогалерия'
      },
      // Open Graph тагове за секция "Галерия"
      { property: 'og:title', content: 'Галерия | Частна занималня Кошерчето' },
      { property: 'og:description', content: 'Галерия със снимки от частна занималня "Кошерчето".' },
      { property: 'og:image', content: 'https://staging.koshercheto.com/images/og-koshercheto.png' },
      { property: 'og:url', content: 'https://staging.koshercheto.com/#gallery' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Частна занималня Кошерчето' },
    ]);
  }
}